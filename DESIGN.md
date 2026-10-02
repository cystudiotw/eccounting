---
name: 雲記帳
description: 為自由接案者與新創公司打造的雲端財務系統 — 記錄用整理好的帳冊
colors:
  ledger-blue: "#005f9d"
  ledger-blue-mid: "#2c80c6"
  ledger-blue-hover: "#2079be"
  ledger-blue-wash: "#cee1ff"
  ink: "#1a1c1c"
  graphite: "#404750"
  steel: "#4d6079"
  mist: "#c0c7d2"
  vellum: "#f3f3f4"
  paper: "#f9f9f9"
  white: "#ffffff"
  hairline: "#e2e2e2"
  hairline-soft: "#e8e8e8"
  hazard: "#ba1a1a"
  hazard-wash: "#ffdad6"
  sage: "#2e7d32"
  sage-wash: "#e8f5e9"
typography:
  display:
    fontFamily: "Manrope, Noto Sans TC, sans-serif"
    fontWeight: 700
    fontSize: "1.5rem / 2.25rem / 2.25rem"
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Manrope, Noto Sans TC, sans-serif"
    fontWeight: 600
    fontSize: "1.25rem / 1.875rem"
    lineHeight: 1.3
  title:
    fontFamily: "Manrope, Noto Sans TC, sans-serif"
    fontWeight: 600
    fontSize: "1.125rem"
    lineHeight: 1.45
  body:
    fontFamily: "Work Sans, Noto Sans TC, sans-serif"
    fontWeight: 400
    fontSize: "0.875rem / 1rem"
    lineHeight: 1.75
  label:
    fontFamily: "IBM Plex Sans, Noto Sans TC, sans-serif"
    fontWeight: 500
    fontSize: "0.75rem / 0.875rem"
  data:
    fontFamily: "JetBrains Mono, monospace"
    fontWeight: 500
    fontSize: "0.75rem / 0.875rem"
  icon:
    fontFamily: "Material Symbols Outlined"
    fontWeight: 400
    fontSize: "1.125rem / 1.25rem / 1.5rem"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "64px"
  "3xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.ledger-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ledger-blue-hover}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ledger-blue}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-on-fill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ledger-blue}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
    height: "44px"
---

# Design System: 雲記帳

## Overview

**Creative North Star:「整理好的帳冊」**

這個系統的視覺承諾不是「很炫的財務工具」，而是「一本已經整理好、可以直接遞交出去的帳冊」。這個比喻直接來自產品的事實：雲記帳最終產出物是一份檔案。視覺系統的每一個決定都從這個終點往回推。如果一個畫面讓人聯想到的是混亂的收據堆，就不該出現在這個系統裡。

帳冊這個比喻帶來三個具體的視覺後果。**紙**：介面底色是接近紙張的暖白與冷灰，不是純白的螢幕感，內容區塊像攤開在桌上的紙面。**欄線**：分隔線、框線、表格邊界都偏冷灰且纖細，像帳冊裡印好的格線，而不是陰影做出來的層次。**對齊的數字**：所有金額、筆數、時間都用等寬字體（JetBrains Mono），因為帳冊裡的數字本來就要能上下對齊比較。

細節上偏機構感、克制、幾乎不裝飾。留白比陰影重要，邊框比漸層重要，字重差異比顏色差異重要。使用者是要處理稅務文件的人，他們的預期是「這個工具會把事情做對」，所以任何看起來像在炫技的東西都是噪音。

**Key Characteristics:**

- 帳冊藍作為唯一權威色，只出現在動作與連結上，不做裝飾
- 紙感底色（`paper`）與白色卡片構成主要層次，而非陰影
- 等寬字體承載每一個數字
- 冷灰細框線劃分欄位，取代厚重陰影
- 圓角溫和（最大 16px），貼近紙張邊緣而非APP 卡片
- 動態只用於狀態回饋與淡入，不做裝飾性運動

## Colors

帳冊藍是唯一的權威色，搭配一個偏冷的石墨灰階；紅與綠只出現在語意上必須表達成敗的場合，不參與裝飾。

### Primary

- **帳冊藍 Ledger Blue** (`#005f9d`)：唯一的品牌動作色。填色按鈕背景、作用中的導覽項目、連結文字、focus 外框、icon。刻意選深到對白底有 6.72:1 對比，讓它在視覺上像簽章而不是強調色。
- **帳冊藍・次階 Ledger Blue Mid** (`#2c80c6`)：僅用於大面積色塊與非文字的裝飾線條。**不用於白底文字**。對比僅 4.19:1，低於 AA 標準。
- **帳冊藍・懸停 Ledger Blue Hover** (`#2079be`)：填色按鈕的 hover 狀態，白字對比 4.63:1。
- **帳冊藍・淡底 Ledger Blue Wash** (`#cee1ff`)：資料視覺與示意圖的底色，不承載文字。

### Neutral

- **墨黑 Ink** (`#1a1c1c`)：所有標題與重要文字的主色。帶一點青，不是純黑，避免在大量閱讀時過於銳利。
- **石墨 Graphite** (`#404750`)：內文預設色。對頁面底色 8.92:1，是全站最常出現的顏色（43 次）。
- **鋼灰 Steel** (`#4d6079`)：次要圖示與列表項的圖示，讓圖示退到文字之後。
- **霧灰 Mist** (`#c0c7d2`)：所有框線與分隔線。冷灰、不搶眼。
- **文件白 Vellum** (`#f3f3f4`)：次級區塊底色、表單內槽、icon 方塊底。
- **紙白 Paper** (`#f9f9f9`)：全站頁面底色。接近紙張的暖調，是「帳冊」感的來源。
- **純白 White** (`#ffffff`)：卡片與輸入框表面，藉由與紙白的差異構成層次。

### Semantic

- **警示紅 Hazard** (`#ba1a1a`)：必填標記、錯誤訊息、startup 頁「個人接案劣勢」的負面區塊。搭配 `#ffdad6` 淡底。
- **任務綠 Sage** (`#2e7d32`)：成功狀態、節稅效益的正數字、startup 頁優勢區塊。搭配 `#e8f5e9` 淡底。
- **選取色 Selection** (`#b3d0f5`)：使用者選取文字時的背景。搭配墨黑 `#1a1c1c` 文字。

### Named Rules

**The One Voice Rule.** 帳冊藍只出現在使用者可以點下去的東西上（連結、按鈕、focus、作用中的導覽列）。它從不作為裝飾色塊出現。藍色的稀有性就是它的說服力。

**The Ink Means Ink Rule.** 墨黑與石墨只出現在真實的文字內容上。不拿來畫 icon 底、不拿來當分隔線、不拿來當漸層端點。

**The Selection Rule.** 選取狀態由單一全局規則決定（`global.css` 的 `::selection`），不得用 Tailwind 的 `selection:` 變體逐處覆寫。原因是 `::selection` 會覆蓋底層表面：一旦把選取文字設成品牌藍，就會在帳冊藍按鈕與面板上變成藍字藍底、完全看不見。規則有兩個條件：

1. 選取文字一律用墨黑疊 `--color-selection`，在所有表面上都必須 ≥ 4.5:1。
2. 選取底色必須在近白表面上仍然看得出來。`--color-selection` 對 `#ffffff` 是 1.58:1、對 `#dfe8ef` 是 1.28:1，都高於瀏覽器預設的選取底色。若改用較淡的 `--color-ledger-blue-wash`，在 `#dfe8ef` 上會掉到 1.06:1，等於沒有選取回饋。

## Typography

**Display / Headline Font:** Manrope（with Noto Sans TC）
**Body Font:** Work Sans（with Noto Sans TC）
**Label Font:** IBM Plex Sans（with Noto Sans TC）
**Data Font:** JetBrains Mono
**Icon Font:** Material Symbols Outlined

Material Symbols 是圖示系統而非字型角色，全站只用 Outlined 這一種樣式與單一字重（400，FILL 0）。不使用 FILL 變體，也不混用其他圖示庫。圖示的一致性比圖示的來源重要。

**Character:** Manrope 的幾何骨架給標題一種工程文件的精確感，而不是消費性品牌的圓潤；Work Sans 開放的字腔讓中文長句在 0.875rem 下仍然好讀；IBM Plex Sans 帶打字機味的標籤用於按鈕與表單欄位；JetBrains Mono 是帳冊裡數字的字體，專用於金額、筆數、時間與格式字串。四種字體各司其職，沒有任何一個角色被重複使用。

### Hierarchy

- **Display**（Manrope 700，`1.5rem` → `2.25rem` → `2.25rem`，行高 1.25，letter-spacing -0.015em）：每頁唯一的一級標題。
- **Headline**（Manrope 600，`1.25rem` → `1.875rem`，行高 1.3）：區塊標題與 hero 內的次級層級。
- **Title**（Manrope 600，`1.125rem`，行高 1.45）：卡片標題、FAQ 問題。
- **Body**（Work Sans 400，`0.875rem` → `1rem`，行高 1.75）：所有段落文字。行高刻意放寬到 1.75，因為受眾是長時間閱讀條款與說明的使用者。
- **Label**（IBM Plex Sans 500，`0.75rem` → `0.875rem`）：按鈕文字、表單標籤、導覽列。

### Named Rules

**The Numbers Are Monospace Rule.** 任何代表金額、筆數、時間、日期、稅率或檔案格式的數字都必須使用 `font-data-mono`（JetBrains Mono），不加例外。帳冊裡的數字要能上下對齊比較，這是帳冊這個隱喻的字體層面。包含 `NT$ 520,000`、`16 筆`、`.txt`、`.bi`、`09:00`。

**The Reading Line Rule.** 內文行長不超過 `max-w-2xl`（約 42rem／67ch）。內文預設 `text-sm`（0.875rem）可用於卡片與列表內的說明，但頁面層級的說明文字用 `text-base`（1rem）。

## Layout

單一容器寬度 `max-w-[1280px]`，七個頁面全部使用同一個值。水平 padding 為 `px-4`（mobile）→ `md:px-8` → `lg:px-16`。內文閱讀頁（FAQ、隱私權、服務條款）另加一層 `max-w-3xl` 收斂，形成「容器—閱讀欄」的兩級結構。

間距節奏以 Tailwind 預設刻度為基礎，但有明確的段落節點：區塊之間用 `py-16`（mobile）與 `md:py-24`／`py-20`；區塊內的標題與內文用 `gap-6` 或 `space-y-4`；卡片內部 padding 為 `p-6`（mobile）與 `md:p-8`。section 之間的間距永遠大於 section 內部的間距，這個比值（約 3:1）是主要的分節手段。

網格用法有三種：功能頁的 2 欄交替（`md:grid-cols-2` 加 `order-*` 交換左右），痛點區的 3 欄卡片（`md:grid-cols-3`），startup 頁的 6+6 對照（`md:grid-cols-12` 加 `col-span-6`）。CTA 面板用 `flex-col md:flex-row` 在窄螢幕堆疊。

**The Section Beats Rule.** 相鄰 section 之間的垂直間距不得小於 section 內部間距。當版面看起來「擠」，第一個要檢查的就是這個比值，而不是字級。

## Elevation & Depth

這是一個**以邊框與色階為主**的系統，陰影是次要手段。深度透過三個階層的表面顏色表達：頁面的 `paper` → 卡片的 `white` → 內槽的 `vellum`。這三層之間的色差極小（都是接近白的值），所以 1px 的霧灰框線是必要的分隔手段，不是裝飾。

陰影只在兩種情況出現：卡片離開頁面時的極輕陰影（`0 4px 12px rgba(0,0,0,0.05)`），以及固定導覽列離開內容時。兩者都是為了讓元素在視覺上離開紙面，而不是為了強調卡片。

### Shadow Vocabulary

- **紙面陰影 Paper** (`0 4px 12px rgba(0,0,0,0.05)`)：卡片、示意圖面板、含表單的區塊。存在感極低。
- **結構陰影 Structure** (`shadow-md`)：固定導覽列、startup 頁的計算結果面板。層級比紙面高一級。
- **微陰影 Micro** (`shadow-xs`)：內嵌元素、icon 方塊、次要面板。

### Named Rules

**The Hairline Carries The Weight Rule.** 分隔兩個表面靠的是 1px 的 `mist` 框線，不是陰影。如果一個元素需要陰影才能跟背景分開，先檢查它是否缺少框線。

**The No Glow Rule.** 沒有內發光、外發光或彩色陰影。帳冊不發光。

## Shapes

圓角溫和且統一：`rounded-md`（8px）用於按鈕與輸入框，`rounded-lg`（12px）用於卡片與面板，`rounded-xl`（16px）用於大型區塊容器，`rounded-2xl`（16px）用於 CTA 面板與計算器面板，`rounded-full` 僅用於 badge 與 icon 底。沒有任何元素的圓角大於 16px。這讓卡片保持紙張邊緣的手感，而不是塑膠 app 的氣泡感。

框線一律 1px `mist`。**不使用 2px 以上的裝飾性框線。**

### Named Rules

**The Paper Edge Rule.** 圓角上限 16px，且不得只框住一條邊。帳冊的紙頁有四個角，也許邊緣有一條彩色的標籤，但不會有半個彩色邊框。

## Components

### Buttons

- **Shape:** 圓角 8px，無邊框（填色）或 1px 帳冊藍邊框（外框）
- **Primary:** 帳冊藍底（`#005f9d`）白字，padding `12px 24px`，字級 label。內容量時為滿寬並置左
- **Hover / Focus:** hover 轉為 `#2079be`，`transition-colors duration-200`。按下時 `scale-95`（`active:scale-90`）
- **Outline:** 白底、1px 帳冊藍邊、帳冊藍字，hover 轉為帳冊藍 10% 淡底
- **On-fill:** 帳冊藍／漸層底上的按鈕，白底帳冊藍字，hover 轉 `vellum`

### Cards / Containers

- **Corner Style:** 12px（`rounded-lg`）
- **Background:** `white`，或 `vellum` 用於次要面板
- **Shadow Strategy:** 紙面陰影（`0 4px 12px rgba(0,0,0,0.05)`），hover 時轉 `shadow-md`
- **Border:** 1px `mist`，內側框線用 `hairline`（`#e2e2e2`）
- **Internal Padding:** `p-6`（mobile）→ `md:p-8`；大面板 `p-6` → `md:p-10`

### Icon Tiles

48px 圓角方塊（功能頁）與 40px（聯絡頁），`vellum` 底、帳冊藍 Material Symbols、`rounded-lg`。功能頁另加紙面陰影。**永遠不用帳冊藍的實心底加白icon。**

### Chips

- **Style:** `rounded-full`，`bg-[#005f9d]/20` 白字（CTA 面板上）或 `bg-[#005f9d]/10` 帳冊藍字（淺底面板上），`text-xs`，`tracking-wider`，`uppercase`
- **State:** 無選取狀態，僅作為分類標記

### Inputs / Fields

- **Style:** 白底，1px `mist` 框線，`rounded-md`，`px-4 py-2.5`（最小高度 44px）
- **Focus:** 框線轉帳冊藍 + 1px 帳冊藍外環（`focus:ring-1`），`transition-all`
- **Label:** IBM Plex Sans 500，`text-xs` → `text-sm`，`mb-1`，墨黑。必填以警示紅星號標示
- **Error:** `hazard-wash` 底、`hazard` 字、`rounded-lg`、`p-3`

### Navigation

固定於頂端的 `paper` 底導覽列，`h-16`，`backdrop-blur-md`，底部 1px `mist` 邊線。桌面版為左側 Logo＋文字、中央導覽、右側填色 CTA。作用中的項目為帳冊藍粗體＋底部 2px 帳冊藍線；非作用中為石墨色，hover 轉帳冊藍。mobile 版以 `md:hidden` 切換為抽屜，抽屜內連結滿寬置中，作用中項目為帳冊藍 10% 淡底。

### Feature Split（功能頁專屬）

2 欄交替版面，`order-*` 交換左右以維持視覺節奏。文字欄順序為：icon tile → 標題 → 說明段落 → 檢核清單。圖片欄為 `aspect-[4/3]` 的容器加 `object-cover`，`group-hover:scale-105`（duration-500）。

### Accent Stat Row（startup 頁專屬）

以 `divide-y` 劃分的緊湊列表列，左側為鋼灰 icon 加標籤，右側為帳冊藍粗體結論。窄螢幕垂直堆疊、寬螢幕 `md:ml-auto` 靠右。此元件承載「優勢一列」的資訊密度，不加框線與陰影。

## Do's and Don'ts

### Do:

- **Do** 用 `font-data-mono` 呈現每一個數字：金額、筆數、時間、日期、稅率、副檔名。
- **Do** 用三層表面（`paper` → `white` → `vellum`）加 1px `mist` 框線來表達深度，而不是加重陰影。
- **Do** 把帳冊藍限制在可點擊的元素上，稀缺地使用。
- **Do** 讓 section 之間的間距至少是 section 內部間距的 3 倍。
- **Do** 用 `rounded-lg`（12px）作為卡片圓角，8px 用於控制項，16px 用於大面板。
- **Do** 保留誠實的限定語（未認證、AI 需自行核對、不取代會計師），在介面上要與功能描述同等清楚。
- **Do** 在內文使用 `text-base`（1rem）與 1.75 行高，讓條款與說明好讀。

### Don't:

- **Don't** 在圓角元素上只框一條邊（`border-t-4`、`border-l-4`）。這是最容易被辨識為機器生成的樣式，且與帳冊的紙頁邊緣矛盾。改用完整 1px 框線，或改用 icon tile 表達強調。
- **Don't** 用 `animate-bounce` 或任何彈跳／回彈緩動。真實物體是平滑減速的。改用線性淡入或位移。
- **Don't** 用 `ledger-blue-mid`（`#2c80c6`）作為白底文字色，對比只有 4.19:1，低於 WCAG AA 的 4.5:1。
- **Don't** 硬編碼 hex 色碼。用 `global.css` 的 `@theme` token；新的 hex 值必須先成為 token 才能使用。
- **Don't** 為同一個元件在不同頁面寫不同的 class 字串。間距、圓角、字級、框線都用 token。
- **Don't** 在這個產品裡發明社會證明。沒有客戶見證、沒有用戶數、沒有認證標章。現有的誠實揭露（FAQ 第 1 題）比發明的背書更有力。
- **Don't** 用柔和的漸層取代結構。帳冊靠線與欄，不靠漸層。
- **Don't** 在同一個畫面上放兩個以上焦點。首頁 hero 的主要動作永遠只有一個。

### 工具例外

`npm run detect` 掃描 `src/pages`，刻意不含 `src/layouts`。Impeccable 的 `flat-type-hierarchy` 規則取 `max(font-size)/min(font-size)`，需 ≥ 2.0 才通過；但 `BaseLayout.astro` 是頁首／頁尾框架，最大元素僅有 32px 的 logo 列（24px 字級），最小是 14px 的導覽標籤，比值 1.71 — 對框架檔案是誤判。字級 14／18／24px 的差距是為了可讀性與觸控尺寸刻意保留的，勿為了消除警告而改壞框架字級。