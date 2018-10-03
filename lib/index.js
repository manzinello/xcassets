const makeDir = require("make-dir");
const Jimp = require("jimp");
const jsonfile = require("jsonfile");

const IMAGES_XCASSETS = "Images.xcassets";
const APPICON_APPICONSET = "AppIcon.appiconset";
const PNG = ".png";

const xlist = require("./xlist");

let quality = 100;

xcassets = f => {
  makeDir(IMAGES_XCASSETS + "/" + APPICON_APPICONSET).then(path => {
    Jimp.read(f)
      .then(x => {
        xlist.forEach(xelement => {
          console.log("creating " + xelement.filename);
          x.resize(xelement.size, xelement.size)
            .quality(quality)
            .write(path + "/" + xelement.filename + PNG);
        });
      })
      .catch(err => {
        console.error(err);
        console.error("I can't create .xcassets, sorry. :(");
      });
  });
};

module.exports.xcassets = xcassets;
