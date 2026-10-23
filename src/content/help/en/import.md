---
title: "Import from other apps"
order: 3
description: "Move to Vaultyn from 1Password, Bitwarden, KeePass, browsers and more."
---

Go to **Settings → Import & export → Import from other apps**, pick the app you used and select its export file. You’ll see a preview and can choose which entries to import.

## How to export from each app

| From | How to export | Format |
|---|---|---|
| 1Password | Desktop app: File → Export, choose **1PUX** (includes cards, IDs and all other types) | 1PUX / CSV |
| Bitwarden | Web vault: Tools → Export vault, choose .json (unencrypted) or .csv | JSON / CSV |
| KeePass / KeePassXC | File → Export, choose KeePass XML or CSV | XML / CSV |
| LastPass | Account options → Advanced → Export, giving a CSV file | CSV |
| Apple Passwords / iCloud Keychain | Passwords app or Safari on Mac: File → Export All Passwords | CSV |
| Chrome / Edge / Firefox | Browser settings → Passwords → Export passwords | CSV |
| Anything else | Any CSV: choose what each column means | CSV |

## Import two-factor secrets

In Google Authenticator, choose Transfer accounts → Export accounts to show a QR code. In Vaultyn, choose **Import from Google Authenticator** and select a screenshot of the QR code to import them all.

## Afterwards

Export files are **unencrypted plain text** — delete them completely (including from the Trash) once the import is done. Importing happens entirely on your Mac; nothing is uploaded.
