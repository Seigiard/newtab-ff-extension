# New Tab (shows your homepage)

[![Mozilla Add-onStars](https://img.shields.io/amo/stars/new-tab-shows-your-homepage?style=flat&label=Mozilla%20Add-on&logo=Firefox-Browser)](https://addons.mozilla.org/en-US/firefox/addon/new-tab-shows-your-homepage/)

A Firefox extension that puts your homepage on new tabs, without stealing keyboard focus from the address bar.

This add-on shows your homepage on new tabs, instead of the default Firefox start page.

## Features

*   **Seamless Workflow:** The address bar is immediately focused and ready for input, just like on the default new tab page. No extra clicks needed—just open a tab and start typing.
*   **Power-User Ready:** Built for keyboard-heavy workflows. Press Esc in the address bar to instantly shift focus to the page, enabling immediate use of extensions like Vimium-C. No extra clicks needed, unlike other similar add-ons.
*   **Dark Theme Friendly:** Avoids the blinding "flash of white" when opening a new tab in a dark environment by respecting your browser's theme.
*   **Lightweight & Secure:** This add-on is [open source (MPL)](https://www.mozilla.org/en-US/MPL/) and consists of only about 20 lines of JS. No data collection, no bloat, no nonsense.

## Installation

1.  Visit the extension page on [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/new-tab-shows-your-homepage/).
2.  Click the "Add to Firefox" button.
3.  Done! Every new tab will now show your homepage.

## Development

Install all deps

```sh
npm i
```

Run and develop

```sh
npm run dev:firefox // Firefox
// or
npm run dev:waterfox // Waterfox
// or
npm run dev:floorp // Floorp

// Open a new tab in the browser and agree to keep the changes.
```

Build for local test

```sh
npm run build
```

Create `.env`, fill it and publish in the store

```sh
npm run sign
```
