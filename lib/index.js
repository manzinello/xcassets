var Jimp = require("jimp");

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

xcassets = testfile => {
  Jimp.read(testfile)
    .then(x => {
      return x
        .resize(256, 256)
        .quality(100)
        .write("example-256.png"); // save
    })
    .catch(err => {
      console.error("I can't create .xcassets, sorry.");
    });
};

module.exports.xcassets = xcassets;
