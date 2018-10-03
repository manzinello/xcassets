var Jimp = require("jimp");

xcassets = testfile => {
  Jimp.read(testfile)
    .then(x => {
      return x
        .resize(256, 256)
        .quality(60)
        .write("lena-small-bw.jpg"); // save
    })
    .catch(err => {
      console.error("I can't create .xcassets, sorry.");
    });
};

module.exports.xcassets = xcassets;
