#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .alias('v', 'version')
  .alias('i', 'icon')
  .nargs('i', 1)
  .default('i', 'appIcon.png')
  .describe('i', 'The original icon in png format')
  .help('h')
  .alias('h', 'help')
  .argv;

const x = require('./lib');
const fs = require("fs")

if (fs.existsSync(argv.icon)) {
  x.xcassets(argv.icon);
}
else {
  console.log(`File ${argv.icon} not found`);
}
