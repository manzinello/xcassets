const makeDir = require("make-dir");
const Jimp = require("jimp");
const jsonfile = require("jsonfile");
var mv = require("mv");

const IMAGES_XCASSETS = "Images.xcassets";
const APPICON_APPICONSET = "AppIcon.appiconset";
const X = "x";
const CONTENTS_JSON = "Contents.json";
const QUALITY = 100;

const contentsjson = require("./Contents");

assets = f => {
  makeDir(IMAGES_XCASSETS + "/" + APPICON_APPICONSET).then(path => {
    Jimp.read(f)
      .then(x => {
        contentsjson.images.forEach(xelement => {
          let size =
            parseInt(xelement.size.split(X)[0]) *
            parseInt(xelement.scale.substr(0, 1));
          console.log("creating ~ " + xelement.filename);
          x.resize(size, size)
            .quality(QUALITY)
            .write(path + "/" + xelement.filename);
        });
      })
      .catch(err => console.error("I can't create .xcassets, sorry."));
  });
};

contents = () => {
  jsonfile
    .writeFile(CONTENTS_JSON, contentsjson, { spaces: 4 })
    .then(res => {
      mv(
        CONTENTS_JSON,
        IMAGES_XCASSETS + "/" + APPICON_APPICONSET + "/" + CONTENTS_JSON,
        err => {
          if (err) console.error("Error creating Contents.json, sorry.");
        }
      );
    })
    .catch(err => console.error("Error creating Contents.json, sorry."));
};

xcassets = f => {
  assets(f);
  contents();
};

module.exports.xcassets = xcassets;
