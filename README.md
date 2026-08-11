# eccounting — 雲記帳

> 靜態 Astro 5 行銷網站（zh-TW），部署於 Cloudflare Pages。

雲記帳是專為自由接案者與新創公司打造的 AI 財務平台。本站為其官方行銷網站。

---

## 技術棧

| 類別 | 技術 |
|---|---|
| 框架 | [Astro](https://astro.build) 5（嚴格 TypeScript 模式） |
| 樣式 | [Tailwind CSS](https://tailwindcss.com) 4（`@tailwindcss/vite`） |
| 字型 | Manrope、Work Sans、IBM Plex Sans、Noto Sans TC、JetBrains Mono |
| 圖示 | Google Material Symbols（Outlined） |
| 部署 | Cloudflare Pages |
| Serverless | Cloudflare Pages Function（聯絡表單 API） |
| 表單驗證 | reCAPTCHA v3 |
| 郵件服務 | Resend |

---

## 頁面

共 7 個頁面，位於 `src/pages/`：

| 路徑 | 說明 |
|---|---|
| `/` | 首頁 — Hero、痛點、CTA |
| `/features/` | 功能介紹 |
| `/startup/` | 創業優勢 |
| `/faq/` | 常見問題 |
| `/contact/` | 聯絡表單 |
| `/privacy/` | 隱私權政策 |
| `/terms/` | 服務條款 |

---

## 指令

| 指令 | 說明 |
|---|---|
| `npm run dev` | 啟動 dev server，port 3000，綁定 `0.0.0.0` |
| `npm run build` | 靜態建置，輸出至 `dist/` |
| `npm run dev:full` | 建置後以 Wrangler 模擬 Cloudflare Pages + Functions 環境（port 3000） |
| `npm run clean` | 清除 `dist/` 與 `.astro/` 建置產物 |

---

## 環境變數

建立 `.env` 檔案（可參考 `.env.example`）：

```env
# Resend API
RESEND_API_KEY=re_your_key_here

# Site URL（用於 canonical URL）
SITE_URL=https://your-domain.com

# Cloudflare Turnstile
CLOUDFLARE_TURNSTILE_SITE_KEY=0x4AAAAAAyour_site_key_here
CLOUDFLARE_TURNSTILE_SECRET=0x4AAAAAAyour_secret_here

# Google Analytics 4
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`PUBLIC_*` 開頭變數可在瀏覽器端使用（Astro 慣例）。

---

## API

`functions/api/contact.ts` — 僅接受 POST，流程：

1. 解析 JSON body（`name`、`company`、`email`、`needs`、`turnstileToken`）
2. 驗證必填欄位
3. 透過 Cloudflare 驗證 Turnstile（檢查 success 與 action）
4. 透過 Resend 發送郵件至 `help@eccounting.com.tw`

---

## 專案結構

```
eccounting/
├── functions/api/contact.ts   # Serverless Function
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # 共用版型（導覽列、頁尾、手機選單、TrialModal）
│   ├── pages/                 # 7 個頁面
│   └── styles/
│       └── global.css         # Tailwind v4 匯入 + 自訂字型工具類別
├── astro.config.mjs
├── tsconfig.json
├── wrangler.toml
└── .env.example
```

---

## 授權

私人專案 — 未授權不得使用。
