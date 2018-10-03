var Jimp = require("jimp");

xcassets = () => {
  console.log("xcassets! // TODO");
  Jimp.read("lenna.png")
    .then(lenna => {
      return lenna
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write("lena-small-bw.jpg"); // save
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports.xcassets = xcassets;
