---
title: 从其他软件导入
order: 3
description: 从 1Password、Bitwarden、KeePass、浏览器等搬到 Vaultyn。
---

进入 **设置 → 导入导出 → 从其他软件导入**，选择原来用的软件，再选它导出的文件。导入前会先显示预览，可以挑选要导入的条目。

## 各软件怎样导出

| 原来的软件 | 导出方法 | 格式 |
|---|---|---|
| 1Password | 桌面版“文件 → 导出”，选 **1PUX** 格式（包含银行卡、证件等全部类型） | 1PUX / CSV |
| Bitwarden | 网页版“工具 → 导出密码库”，选 .json（未加密）或 .csv | JSON / CSV |
| KeePass / KeePassXC | “文件 → 导出”，选 KeePass XML 或 CSV | XML / CSV |
| LastPass | “账户选项 → 高级 → 导出”，得到 CSV 文件 | CSV |
| Apple 密码 / iCloud 钥匙串 | Mac 上的“密码”App 或 Safari：“文件 → 导出所有密码” | CSV |
| Chrome / Edge / Firefox | 浏览器设置里的“密码 → 导出密码” | CSV |
| 其他 | 任意 CSV：选好以后，手动指定每一列是什么 | CSV |

## 导入两步验证密钥

在 Google 身份验证器里选择“转移账号 → 导出账号”，会显示二维码。在 Vaultyn 里选择 **从 Google 身份验证器导入**，选择二维码的截图即可批量导入。

## 导入以后

导出的文件是**不加密的明文**，导入完成后请立即彻底删除（包括废纸篓）。导入全部在本机完成，不会上传任何内容。
