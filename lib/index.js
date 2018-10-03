const makeDir = require("make-dir");
const Jimp = require("jimp");

const sizes = [
  16,
  20,
  24,
  27.5,
  29,
  32,
  40,
  44,
  60,
  76,
  83.5,
  86,
  98,
  128,
  256,
  512,
  1024
];

let quality = 100;

xcassets = f => {
  makeDir("Images.xcassets/AppIcon.appiconset").then(path => {
    console.log(path);
    Jimp.read(f)
      .then(x => {
        sizes.forEach(size => {
          x.resize(size, size)
            .quality(quality)
            .write(path + "/appIcon-" + size + ".png");
        });
      })
      .catch(err => {
        console.error("I can't create .xcassets, sorry. :(");
      });
  });
};

module.exports.xcassets = xcassets;
