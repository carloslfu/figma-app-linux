# Figma app linux

Unofficial Figma desktop app rebuild for Linux users who want a workaround while official version is released. We <3 Figma :). Note that this app support local-fonts.

Before run the AppImage you may need to install libfontconfig with: `sudo apt-get install libfontconfig-dev`, some distros don't need it.

Link to AppImage [here](https://github.com/carloslfu/figma-app-linux/releases/download/1.0/Figma-63.3.0-x86_64.AppImage).

## Steps to build

- `npm i`
- `npm run getSrc`
- Relpace `./app/bindings.js` with `./custom/bindings.js` file
- Setup environment variable: `export npm_config_target=8.9.3`
- Go to `app/` folder and install font support with `npm i font-manager`
- Go to root folder and run: `npm run electron-rebuild`
- Run: `npm run build`
- After packaging, the binaries should be in the `dist/` folder
