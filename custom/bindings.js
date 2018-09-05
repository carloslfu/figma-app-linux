"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const util_1 = require("./util");
const fontManager = require('font-manager')
const bindings = {
  getFonts() {
    const fonts = fontManager.getAvailableFontsSync().map(font => ({
      ...font,
      postscript: font.postscriptName,
      stretch: font.width,
    }))
    const fontMap = {}
    for (let font of fonts) {
      if (!fontMap[font.path]) {
        fontMap[font.path] = [font]
      } else {
        fontMap[font.path].push(font)
      }
    }
    return fontMap
  }
}
function getFonts() {
    return bindings.getFonts();
}
exports.getFonts = getFonts;
function customizeWindowButtons(windowHandle) {
    if (process.platform !== 'darwin') {
        return;
    }
    // bindings.customizeWindowButtons(windowHandle);
}
exports.customizeWindowButtons = customizeWindowButtons;
function removeDragRegionViews(windowHandle) {
    if (process.platform !== 'darwin') {
        return;
    }
    // bindings.removeDragRegionViews(windowHandle);
}
exports.removeDragRegionViews = removeDragRegionViews;
function readResourceForkSync(path) {
    if (process.platform !== 'darwin') {
        return undefined;
    }
    // return bindings.readResourceForkSync(path);
}
exports.readResourceForkSync = readResourceForkSync;
