#!/usr/bin/env node

const argv = require("yargs").argv;
const x = require("./lib");
const defaultIcon = "appIcon.png";

if (argv.icon) {
  x.xcassets(argv.icon);
} else {
  x.xcassets(defaultIcon);
}
