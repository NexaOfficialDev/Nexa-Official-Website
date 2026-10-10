# Nexa 1.0.0 — Complete Release Folder

This one folder contains the white-and-blue website, website assets, downloadable source/build ZIP, source tree, installer templates, and snapshots placeholder.

## Website

`index.html` is at the root so this folder can be uploaded directly to the root of `NexaOfficialDev/Nexa-Official-Website`. Keep `styles.css`, `script.js`, `assets/`, `downloads/`, and `snapshots/` beside it.

GitHub Pages: repository Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.

## Downloads and release status

- `downloads/Nexa-1.0.0-Source.zip` — source/build package; download enabled.
- `downloads/Nexa-1.0.0-x86-Setup.exe` — Nexa 1.0.0 x86 EXE installer; download enabled.
- `downloads/Nexa-1.0.0-MSI.zip` — MSI package ZIP containing `Nexa-1.0.0-x86.msi` and its required `cab1.cab`; download enabled.
- Snapshot builds — Coming Soon; no snapshot packages are published yet.

The old 0.9.6 binaries are deliberately excluded from the 1.0.0 release package.

## File icon policy

The Windows installer assigns the Nexa icon to `.nx` and `.nxw` only. It does not claim `.nxa`, so app creators can keep their own application icons and associations.

## Included directories

- `assets/` — website logo and favicons
- `downloads/` — source ZIP and download page
- `snapshots/` — coming-soon placeholder
- `source/Nexa-1.0.0-Source-Build/` — complete editable source/build tree

Official project: https://github.com/NexaOfficialDev/Nexa-Official-Realeases
