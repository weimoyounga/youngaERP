# ERP 靜態網站部署

目前版本已整理成可部署靜態網站：

- 部署目錄：`dist`
- 入口檔案：`dist/index.html`
- 靜態依賴：`dist/vendor`

## Vercel

1. 建立 Vercel 專案。
2. 上傳整個專案資料夾，或連接 GitHub repository。
3. Framework Preset 選 `Other`。
4. Output Directory 填 `dist`。
5. Deploy。

## Netlify

1. 建立 Netlify Site。
2. Publish directory 填 `dist`。
3. Build command 留空。
4. Deploy。

## Cloudflare Pages

1. 建立 Pages 專案。
2. Framework preset 選 `None`。
3. Build command 留空。
4. Build output directory 填 `dist`。
5. Deploy。
