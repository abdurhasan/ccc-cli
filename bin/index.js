#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const rootModule = path.resolve(__dirname, '../');
const lib = require(rootModule + '/lib');
const { version } = require(rootModule + '/package.json');
const colors = require('chalk');

program.on('option:verbose', function () {
  process.env.VERBOSE = this.verbose;
});


program.version(version)
  .option('--about', 'Disclaimer this library')
  .option('--order', 'Order a coffee before coding')
  .option('--clone <service>', 'Order a coffee before coding')
  .option('--list', 'List of microservices');

program.parse(process.argv)

const paramExec = Object.keys(lib).filter(vu => program[vu]).join()
const argExec = program[paramExec]



if (!paramExec) console.error(colors.red("\nInvalid command:"), `\n ${colors.green('--help')} for a list of available commands.\n`)
else lib[paramExec](argExec)







/*******************************************/
