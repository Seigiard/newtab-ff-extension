# New Tab (shows your homepage)

[![Mozilla Add-onStars](https://img.shields.io/amo/stars/new-tab-shows-your-homepage?style=flat&label=Mozilla%20Add-on&logo=Firefox-Browser)](https://addons.mozilla.org/en-US/firefox/addon/new-tab-shows-your-homepage/)

A Firefox extension that puts your homepage on new tabs, without stealing keyboard focus from the address bar.

This add-on shows your homepage on new tabs, instead of the default Firefox start page.

The behavior of the URL bar is the same as the Firefox start page: it'll be blank and focused, until you navigate away from your home page.

This extension respects dark theme to avoid flash of white page when new tab is loading.

This add-on is open source (MPL), and comprises of only about 20 lines of JS. You can read the full source, and if something doesn't quite work, make a PR or file an issue.

## Development

```sh
npm i

npm run dev:firefox // Firefox
npm run dev:waterfox // Waterfox
npm run dev:floorp // Floorp
```

## Deploy

```sh
npm run build
```
