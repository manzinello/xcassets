const makeDir = require("make-dir");
const Jimp = require("jimp");
const jsonfile = require("jsonfile");

const IMAGES_XCASSETS = "Images.xcassets";
const APPICON_APPICONSET = "AppIcon.appiconset";
const X = "x";
const CONTENTS_JSON = "Contents.json";

const assets = require("./assets");

let quality = 100;

xcassets = f => {
  makeDir(IMAGES_XCASSETS + "/" + APPICON_APPICONSET).then(path => {
    Jimp.read(f)
      .then(x => {
        assets.images.forEach(xelement => {
          let size =
            parseInt(xelement.size.split(X)[0]) *
            parseInt(xelement.scale.substr(0, 1));
          console.log("creating ~ " + xelement.filename);
          x.resize(size, size)
            .quality(quality)
            .write(path + "/" + xelement.filename);
        });
      })
      .catch(err => {
        // console.error(err);
        console.error("I can't create .xcassets, sorry. :(");
      });
  });

  jsonfile
    .writeFile(
      IMAGES_XCASSETS + "/" + APPICON_APPICONSET + "/" + CONTENTS_JSON,
      assets,
      { spaces: 4 }
    )
    .then(res => {
      console.log("Write complete");
    })
    .catch(error => console.error(error));
};

module.exports.xcassets = xcassets;
