#!/usr/bin/env node

const argv = require("yargs").argv;

let x = require("./lib");

let testfile = "appIcon.png";
x.xcassets(testfile);
