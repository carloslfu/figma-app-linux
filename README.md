# Figma app linux

Unofficial Figma desktop app rebuild for Linux users who want a workaround while official version is released. We <3 Figma :). Note that this app support local-fonts.

Before run the AppImage you may need to install libfontconfig with: `sudo apt-get install libfontconfig-dev`, some distros don't need it.

Link to AppImage [here](https://github.com/carloslfu/figma-app-linux/releases/download/v2/Figma-63.3.0-x86_64.AppImage).

## Steps to build

- `npm i`
- `npm run getSrc`
- Relpace `./app/bindings.js` with `./custom/bindings.js` file
- Setup environment variable: `export npm_config_target=8.9.3`
- Go to `app/` folder and install font support with `npm i font-manager`
- Go to root folder and run: `npm run electron-rebuild`
    * (If this returns an error, running the command as `sudo` could work.)
- Run: `npm run build`
    * (If this returns an error, running the command as `sudo` could work.)
- After packaging, the binaries should be in the `dist/` folder

## Install script

You also may build and install Figma app by `./install.sh` in cli.

### What does the install.sh do?
- Clones git repo in `~/figma-app-linux_x64`
- Builds the Figma app by commands writed above in **Steps to build**
- Copies `*.AppImage` to `/usr/bin/`
- Removes source files
- Starts Up the Figma app(don't forget confirm *.AppImage dialog)
``
If you encountered with electron-rebuild error(exit code 255) don't worry. App will be fully assembled.
``
### Tested platform
- OS Manjaro Linux x86_64 *(Archlinux derivative)*
- npm 5.6.0
- node v8.11.2

### Things to do
- Add icon for app
- Add prompt for removing source files
