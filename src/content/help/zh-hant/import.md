---
title: "從其他軟體匯入"
order: 3
description: "從 1Password、Bitwarden、KeePass、瀏覽器等搬到 Vaultyn。"
---

進入 **設定 → 匯入匯出 → 從其他軟體匯入**，選擇原來用的軟體，再選它匯出的檔案。匯入前會先顯示預覽，可以挑選要匯入的項目。

## 各軟體怎樣匯出

| 原來的軟體 | 匯出方法 | 格式 |
|---|---|---|
| 1Password | 桌面版「檔案 → 匯出」，選 **1PUX** 格式（包含銀行卡、證件等全部類型） | 1PUX / CSV |
| Bitwarden | 網頁版「工具 → 匯出密碼庫」，選 .json（未加密）或 .csv | JSON / CSV |
| KeePass / KeePassXC | 「檔案 → 匯出」，選 KeePass XML 或 CSV | XML / CSV |
| LastPass | 「帳戶選項 → 進階 → 匯出」，得到 CSV 檔 | CSV |
| Apple 密碼 / iCloud 鑰匙圈 | Mac 上的「密碼」App 或 Safari：「檔案 → 匯出所有密碼」 | CSV |
| Chrome / Edge / Firefox | 瀏覽器設定裡的「密碼 → 匯出密碼」 | CSV |
| 其他 | 任意 CSV：選好以後，手動指定每一欄是什麼 | CSV |

## 匯入兩步驗證金鑰

在 Google 身份驗證器裡選擇「轉移帳戶 → 匯出帳戶」，會顯示二維碼。在 Vaultyn 裡選擇 **從 Google 身份驗證器匯入**，選擇二維碼的截圖即可批次匯入。

## 匯入以後

匯出的檔案是**不加密的明文**，匯入完成後請立即徹底刪除（包括垃圾桶）。匯入全部在本機完成，不會上傳任何內容。
