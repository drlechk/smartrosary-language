# SmartRosary Language

Device language definitions for SmartRosary NVS language partitions.

This repository owns the canonical fixture definitions used to generate
`nvs-lang-*.bin` packages and to drive device-language previews in companion
tools. The language editor owns editing, import/export, NVS encoding, CRC
validation, and BLE upload behavior; this repository owns the strings and
metadata.

## Contents

- `fixtures.js` registers the browser fixture loader used by the language
  editor.
- `fixtures/*.js` contains one SmartRosary NVS language fixture per language.

Current fixture languages are `de`, `en`, `es`, `fr`, `it`, `la`, `pl`, and `pt`.

## Generate Published Binaries

From the language editor repository:

```sh
node scripts/generate-language-binaries.mjs ../smartrosary-web-installer/lang
```

The editor script reads definitions from this sibling repository by default.
Set `SMARTROSARY_LANGUAGE_DIR` to use a different checkout.

## Consumers

- `smartrosary-language-editor` reads this repository when editing and
  generating language binaries.
- `smartrosary-web-installer` publishes generated `lang/nvs-lang-*.bin`
  packages.
- `smartrosary-app` downloads the published installer packages.
- `smartrosary-mockups` and `smartrosary-howto` keep preview fixture copies
  synced from this repository for standalone static pages.
