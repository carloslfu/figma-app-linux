# Figma app linux

Unofficial Figma desktop app rebuild for Linux users who want a workaround while official version is released. We <3 Figma :).

Link to AppImage [here](https://github.com/carloslfu/figma-app-linux/releases/download/1.0/Figma-63.3.0-x86_64.AppImage).

## Steps to build

- `npm i`
- `npm run getSrc`
- Open `./app/bindings.js` file and comment all lines that contain the word `bindings`. i.e. `const bindings = ` and others
- Run `npm run build`
- After packaging the binaries should be in the `dist/` folder
