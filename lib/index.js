const makeDir = require("make-dir");
const Jimp = require("jimp");
const jsonfile = require("jsonfile");

const xlist = require("./xlist");

let quality = 100;

xcassets = f => {
  makeDir("Images.xcassets/AppIcon.appiconset").then(path => {
    Jimp.read(f)
      .then(x => {
        xlist.forEach(xelement => {
          console.log("creating " + xelement.name);
          x.resize(xelement.size, xelement.size)
            .quality(quality)
            .write(path + "/" + xelement.name + ".png");
        });
      })
      .catch(err => {
        console.error(err);
        console.error("I can't create .xcassets, sorry. :(");
      });
  });
};

module.exports.xcassets = xcassets;
