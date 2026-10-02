// Verifies that the legal pages' clause text is byte-identical to the last commit.
//
// AGENTS.md: privacy.astro / terms.astro clause text is compliance documentation and
// must not be rewritten — only the markup structure around it may change. This script
// exists because that rule broke silently twice during the design refactor.
//
// It extracts every string literal from the SECTIONS data block and asserts each one
// appears verbatim in the committed version of the same file. Whitespace is normalized
// so re-wrapping a clause across lines is allowed, but any character change is not.
//
// Usage: npm run check:legal

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const FILES = ['src/pages/privacy.astro', 'src/pages/terms.astro'];

const normalize = (s) => s.replace(/\s+/g, '');

let failures = 0;

for (const file of FILES) {
  let head;
  try {
    head = execSync(`git show HEAD:${file}`, { encoding: 'utf8', maxBuffer: 1e8 });
  } catch {
    console.error(`${file}: not present in HEAD, skipping`);
    continue;
  }

  const current = readFileSync(file, 'utf8');
  const start = current.indexOf('const SECTIONS');
  if (start === -1) {
    console.error(`${file}: could not find the SECTIONS block`);
    failures++;
    continue;
  }
  const end = current.indexOf('\n];', start);
  const clauses = [...current.slice(start, end).matchAll(/'([^']*)'/g)]
    .map((m) => m[1])
    .filter((s) => s.length > 1);

  const headNormalized = normalize(head);
  const altered = clauses.filter((c) => !headNormalized.includes(normalize(c)));

  if (altered.length === 0) {
    console.log(`${file}: ${clauses.length} clauses verbatim`);
    continue;
  }

  failures += altered.length;
  console.error(`${file}: ${altered.length} of ${clauses.length} clauses ALTERED`);
  for (const clause of altered) {
    const anchor = normalize(clause).slice(0, 12);
    const idx = headNormalized.indexOf(anchor);
    console.error(`\n  current: ${clause}`);
    if (idx === -1) {
      console.error(`  -> not present in HEAD at all`);
      continue;
    }
    const n = normalize(clause);
    let k = 0;
    while (k < n.length && idx + k < headNormalized.length && n[k] === headNormalized[idx + k]) k++;
    console.error(`  first divergence at char ${k}`);
    console.error(`  HEAD: ...${headNormalized.slice(Math.max(0, idx + k - 20), idx + k + 20)}...`);
    console.error(`  NOW : ...${n.slice(Math.max(0, k - 20), k + 20)}...`);
  }
}

if (failures > 0) {
  console.error(`\nLEGAL TEXT CHANGED — restore the wording from HEAD before committing.`);
  process.exit(1);
}
console.log('\nlegal text unchanged');