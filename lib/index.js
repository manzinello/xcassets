const makeDir = require("make-dir");
const Jimp = require("jimp");
const jsonfile = require("jsonfile");

const IMAGES_XCASSETS = "Images.xcassets";
const APPICON_APPICONSET = "AppIcon.appiconset";
const X = "x";

const xlist = require("./xlist");

let quality = 100;

contents = (file, json) => {
  return jsonfile.writeFile(file, json);
};

xcassets = f => {
  makeDir(IMAGES_XCASSETS + "/" + APPICON_APPICONSET).then(path => {
    Jimp.read(f)
      .then(x => {
        xlist.images.forEach(xelement => {
          let size = parseInt(xelement.size.split(X)[0]);
          console.log("creating ~ " + xelement.filename);
          x.resize(size, size)
            .quality(quality)
            .write(path + "/" + xelement.filename);
        });
      })
      .catch(err => {
        console.error(err);
        console.error("I can't create .xcassets, sorry. :(");
      });
  });
};

module.exports.xcassets = xcassets;
