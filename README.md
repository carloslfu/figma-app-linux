# Figma app linux

Unofficial Figma desktop app rebuild for Linux users who want a workaround while official version is released. We <3 Figma :).

Link to installer [here](), is an AppImage.

## Steps to build

- `npm i`
- `npm run getSrc`
- Open `./app/bindings.js` file and comment all lines that contain the word `bindings`. i.e. `const bindings = ` and others
- Run `npm run build`
- After packaging the binaries should be in the `dist/` folder
