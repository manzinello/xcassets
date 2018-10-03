const makeDir = require("make-dir");
const Jimp = require("jimp");

const xlist = require("./xlist");

let quality = 100;

xcassets = f => {
  makeDir("Images.xcassets/AppIcon.appiconset").then(path => {
    console.log(path);
    Jimp.read(f)
      .then(x => {
        xlist.forEach(xelement => {
          x.resize(xelement.size, xelement.size)
            .quality(quality)
            .write(path + "/" + xelement.name + ".png");
        });
      })
      .catch(err => {
        console.error("I can't create .xcassets, sorry. :(");
      });
  });
};

module.exports.xcassets = xcassets;
