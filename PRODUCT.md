# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two confirmed primary audiences, in the order they matter to the site's narrative:

1. **自由接案者／個人工作室** — not yet incorporated, or newly incorporated, billing clients under a personal name. Their situation: income is taxed as 執行業務所得 merged into 綜所稅 at high progressive rates; 報稅季 arrives and receipts are scattered across paper and chat apps; corporate clients want a 統一編號 and a proper 發票 they can deduct 5% 進項稅額 against. Job: keep clean books during the work, and produce 營業稅 media files without a scramble. Lowest tolerance for setup friction and any cost of feeling stupid about tax rules they did not choose to learn.

2. **新創公司經營者** — has a 統編, a small team, and multiple people touching the books. Their situation: 合夥人 and outsourced staff need scoped access; they are aware of the 5% 進項稅額 they are leaving on the table if receipts go uncollected. Job: multi-user bookkeeping with clear permissions, and a filing season that does not require heroic effort. Values the permission model and the audit trail over automation novelty.

A third segment — 會計師／記帳士事務所 wanting multi-company management — is **addressed in copy** (FAQ items 12 and 13, 服務條款 §三) but was **not** confirmed by the owner as a primary audience for this site. Treat it as secondary until the owner says otherwise.

## Product Purpose

The product is a cloud bookkeeping system built for people who would rather be doing their actual work than reconciling receipts. It exists because Taiwan's 營業稅 filing regime makes bookkeeping a tax-compliance chore, and the chore falls hardest on the smallest operators.

Success means a first-time user recognizes their own situation in the pain section without translating it, understands the mechanism within one page, and reaches the free-trial signup. For the site specifically: the marketing site's job is to earn the click to `s1.eccounting.com.tw`, and to answer the skeptical question "can this actually produce a file my accountant will accept?" — which is why the FAQ spends more words on verification and disclaimer than on feature delight.

## Positioning

**The mechanism is a two-beat chain: the ledger fills itself by conversation, and leaves as a 營業稅媒體申報檔.** The owner has promoted **AI 記帳模式 (conversational bookkeeping)** to the headline. The user does not type into a form; they say what happened in a sentence, or send a receipt photo or a platform Excel file, and the AI adds the entry. They can then edit it, delete it, ask for analysis, or ask for a reorganization — all in the same conversation.

That headline is legitimate because the capture step is where this audience actually fails. Books go unkept because entry is tedious, not because filing is hard. Removing the entry burden attacks the real cause.

**The second beat is still mandatory: 憑證 in → compliant file out.** International tools (QuickBooks, Xero, Wave) have no concept of 營業稅, 統一編號, 進項/銷項, or the 財政部 media file, and they do not chat with the user in LINE or Telegram. The artifact the user hands to their accountant remains the claim a neighbor could not truthfully copy. Conversational input is the headline; the filed artifact is the reason the headline survives a skeptical reader.

Surface rule: lead with how easy it is to get the numbers in, and close every mechanism screen on the file. Never let a screen end on "the AI is smart."

## Plan gating (confirmed by owner, 2026-10)

These are the only commercial facts confirmed. Do not invent prices, plan names, or quota numbers.

- **AI 記帳模式 is live and included in the free plan**, subject to a 使用額度限制. Quota figures are unknown.
- **Telegram chat bookkeeping works on the 試用版.**
- **LINE chat bookkeeping requires a paid plan.** This is a real cost difference and the site states it plainly rather than hiding it behind "LINE and Telegram support."

## Operating Context

- **Filing season is the deadline that governs everything.** 5 月 and 11 月 營業稅申報 periods structure the user's year. Copy that implies year-round ease is weaker than copy that names the deadline.
- **The user is not a tax professional and does not want to become one.** They need the system to hold the rules, and they need to be told — honestly — where its judgment ends and a 合格會計師/記帳士 begins. The FAQ and 服務條款 §八 already draw this line; preserving that candor is a trust asset, not a compliance chore to be softened.
- **Collaboration is real.** Roles (管理者／編輯者／查閱者), 操作稽核日誌, and 應收付到期通知 via Line/Telegram are parts of the actual usage scene.
- **An accountant may be in the loop.** The user can invite one into the multi-user system. Both the "I do it myself" and "we work with an accountant" paths are legitimate.
- **Mobile matters at the point of capture.** 發票拍照即記 and 應收付提醒 are phone-moment activities. The desktop reading experience and the phone capture moment are different jobs in the same product.
- **Evidence is expected, not vibes.** When a claim touches tax deductibility, the site tells the user to verify. This posture is deliberate and should survive any copy rewrite.

## Capabilities and Constraints

**Confirmed capabilities** (from terms, FAQ, and feature copy):

- **AI 記帳模式（對話式記帳）**：以自然語言對話完成帳目的新增、編輯、刪除、分析、統整；試用方案可用（有使用額度限制）
- **聊天管道記帳**：LINE（需付費方案）與 Telegram（試用版即可）綁定後可直接在聊天室記帳，並沿用同一組 AI 能力
- 多種輸入記帳方式：手動、電子發票平台匯入（Excel/CSV）、AI 辨識 QR Code 與手寫／三聯式發票；照片與 Excel 皆可從對話中送出
- 自動進銷項稅額計算與防呆、異常數據檢測。**異常檢測的具體判定項目並未確認**，站上不可列舉範例。已明確否決：「餐飲支出缺少憑證」（可能是手動輸入，本來就不一定有憑證，不該提示為異常）與「差旅費高於近月區間」（該功能不存在）。只寫「自動防呆與異常數據檢測」這句能力描述，不要發明它會抓出什麼。
- 媒體申報檔匯出（.txt / .bi，符合財政部規範）
- 多用戶／多公司管理、角色權限（管理者／編輯者／查閱者）、操作稽核日誌、雲端即時同步與備份
- 應收／應付管理與自動到期通知（Line、Telegram 綁定）；可切「未來一季／半年／一年」查看應收與應付的紀錄筆數與總額，並有行事曆顯示
- 客戶（交易對象）資料管理
- 報表與財務分析圖表（隨資料累積生成）；收益分析可比較**近三年**金流與發票紀錄的進出狀況，也可依會計科目分類統計
- 每月明細可匯出 CSV 與 PDF
- 兩步驟驗證（2FA）

**Security posture as stated by the owner** — keep these facts consistent with 隱私權政策 §四 and FAQ item 1:

- TLS 1.3 in transit
- AES-256-GCM at rest for sensitive 財務單據
- **Not yet ISO 27001 certified.** The architecture is built in reference to that standard; the certification does not exist. Never imply certification.
- 雲端即時備份

**Undecided product facts** — do not invent these:

- **Pricing.** No price, plan name, or tier appears anywhere in the repo. The 服務條款 references "試用體驗方案與付費升級方案" with prices deferred to the purchase page. Any pricing surface needs owner input.
- **Quota figures.** The free plan's 使用額度限制 is confirmed to exist but its size is unknown. The site says the limit exists and defers the number to the 方案頁面. Do not invent a monthly count.
- **Free-trial terms.** Copy says 無須綁定信用卡. Duration and what unlocks are unstated.
- **Accuracy claims.** No figure exists for how often the conversational AI or receipt recognition is correct. Never state a percentage, and never claim a booked entry is "automatically correct."
- **TrialModal.** `AGENTS.md` and `README.md` both describe a `TrialModal` slot in `BaseLayout.astro`. **It does not exist in the current code.** Either it was removed or never built; confirm before any work assumes it.
- **`reCAPTCHA v3` vs `Cloudflare Turnstile`.** README says reCAPTCHA v3; the code, env vars, and `.env.example` all say Turnstile. The code is authoritative; README is stale.

**Hard constraints on this repository:**

- Static output only. No client-side framework is installed and none may be introduced for a marketing surface.
- Deploy target is Cloudflare Pages; `functions/api/contact.ts` must remain the only server surface.
- Strict TypeScript via `astro/tsconfigs/strict`.
- No test framework, no lint, no CI. Verification is `npm run build` passing plus visual inspection.
- `img` assets are hot-linked from `lh3.googleusercontent.com` (no local asset pipeline). This is an existing dependency, not a decision to preserve by default — flag it rather than silently cementing it.

## Brand Commitments

- **Name:** 雲記帳 ("cloud bookkeeping"). Owner is 雲橙工作室. Support address `help@eccounting.com.tw`. Product domain `eccounting.com.tw`; trial app on the `s1.` subdomain.
- **Voice (established in existing copy, confirmed by owner as rewritable but not as discardable):** speaks as a peer who has also filed taxes and also hated it. Plain, specific, unsalesy. Concedes limitations before being asked. The recurring self-description is 雲端財務神隊友 / 財務顧問 — a partner, not an authority.
- **Language:** zh-TW exclusively. Traditional characters, Taiwan terminology (統編, 營業稅, 進項/銷項, 記帳士, 媒體申報檔). No English UI strings. Numbers are formatted NT$ with `,` separators.
- **Confidentiality posture is unusually candid for a SaaS marketing site** — the ISO gap, the AI-accuracy caveat, the "this does not replace an accountant" answer. Do not sand this down for conversion.
- **Visual assets:** logo and three product screenshots are hot-linked Google-hosted URLs. There is no local brand asset set, no icon set of its own (Google Material Symbols Outlined is the icon language), no photography.

## Evidence on Hand

Real, in the repo:

- The `/` hero is the only remaining first-party product screenshot (`src/pages/index.astro`), plus the logo in `BaseLayout.astro`. `features.astro` previously carried two more product screenshots; at the owner's request they were replaced with labelled HTML mockups, so they are gone from the site.
- A working interactive 節稅效益試算器 on `/startup/` — a real, functioning demonstration, not a mock
- Labelled HTML mockups, all self-declared as 示意畫面 and deliberately not styled as screenshots: the AI 記帳 conversation (shared component `src/components/ChatMockup.astro`, used by both `/` and `/features/` with different message copy), the chat-channel plan panel, the 媒體申報檔 panel, the multi-user role/audit-log panel, and the 報表與匯出 panel on `/features/`
- Verbatim FAQ answers doubling as a defensive-content library (the disclaimer language in FAQ 2/6/7/10/12 and 服務條款 §六/§八 is finished, careful work)
- Real product UI vocabulary: role names, export formats (.txt/.bi), 國稅局 spec language, ERP integration (財務輪廓 → ERP)
- Live GA4 measurement on every page

**Absent — future work must not fabricate:**

- **No testimonials, no customer logos, no case studies, no user counts.** There is zero social proof in this repo. Do not invent a quote, an avatar, a company name, or a metric like "已有 2,000 家企業使用".
- **No security badges, no SOC/ISO marks.** No certification exists.
- **No pricing.**
- **No demo video, no product tour.**
- **No founder or team page.**

## Product Principles

1. **Lead with the conversation, close on the artifact.** The owner has promoted AI 記帳模式 to the headline, so entry-friction messaging is now correct. But a screen that ends on "the AI is smart" has lost the thread. Every mechanism section should pair the conversational input with the filed output, or point forward to it.
2. **Name the deadline.** 報稅季 is the user's actual constraint. Honest friction ("you still have to verify") beats vague ease ("零煩惱"), because the audience can detect overselling instantly — they do their own taxes.
3. **Candid limits convert better than hype for this audience.** The ISO gap, the AI-accuracy caveat, the LINE-pays-more detail, and the "bring your accountant" answer are the site's strongest trust signals. Preserve them under any conversion pressure.
4. **Respect the two-segment split.** A solo operator and a small-team founder reading the same page should each find their own situation named. 「從自由接案到新創公司」 is the promise that keeps the audience broad without splitting the message.
5. **One mechanism per screen.** The site has a small page count and a dense subject. Each screen should advance a single argument rather than listing capabilities.
6. **Illustrations must declare themselves.** The AI 記帳 chat transcript on `/` and the channel-plan panel on `/features/` are hand-built HTML mockups, not product screenshots. Both carry an explicit 示意 label. Any future illustrative visual follows the same rule.

## Accessibility & Inclusion

No product-specific standard has been set by the owner.

Existing baseline worth preserving rather than regressing: `lang="zh-TW"`, visible focus states on form inputs, real `<details>`/`<summary>` accordion semantics on `/faq/`, and `aria-label` on the mobile menu trigger. The body text sizes (`text-sm`–`text-base`, `#404750` on `#f9f9f9`) sit near the lower bound of comfortable reading and should be treated as a candidate for improvement, not as the target.