---
title: "Data folder & iCloud Drive sync"
order: 2
description: "Where your data is stored and how to sync between Macs."
---

Vaultyn has no server. Your encrypted data is saved in **Vaultyn’s private folder on this Mac** by default; you can change it in Settings to a folder you choose.

## What’s in the folder

| File / folder | Contents |
|---|---|
| `vault-sync.json` | The latest encrypted data, written on every change |
| `backups` | Automatic backups made before the first change each day |
| `attachments` | Encrypted attachments (random file names) |
| `icons` | Encrypted website icons |

Everything is encrypted and unreadable without your master password.

## Sync between Macs

Change the data folder to **iCloud Drive** (or Google Drive, OneDrive or Dropbox), then open the same `vault-sync.json` on each Mac:

1. On the first Mac, go to **Settings → Data & sync** and choose a folder in iCloud Drive.
2. On the other Mac, install Vaultyn, click **Open sync file** on the lock screen, choose the same `vault-sync.json` and enter your master password.

> Don’t edit the same data on two Macs **at the same time**. Finish on one, let it sync, then use the other.

## Change the data folder

In **Settings → Data & sync → Data folder**, click “Choose folder…”. The old files aren’t deleted; remove them yourself once the new location works.
