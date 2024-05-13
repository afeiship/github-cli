#! /usr/bin/env bun

import { Command, Option } from 'commander';
import { createRequire } from 'module';

import '@jswork/next';

const __dirname = new URL('./', import.meta.url).pathname;
const require = createRequire(__dirname);
const pkg = require('./package.json');
const program = new Command();

program.version(pkg.version);
program
  .addOption(new Option('-v, --verbose', 'show verbose log'))
  .addOption(new Option('-p, --pages', 'set pages to main:docs'))
  .addOption(new Option('-d, --delete-pages', 'delete pages'))
  .parse(process.argv);

/**
 * @help: jsc -h
 * @description: jsc -f
 */

class CliApp {
  private args: string[];
  private opts: Record<string, any>;

  constructor() {
    this.args = program.args;
    this.opts = program.opts();
  }

  log(...args: any[]) {
    const { verbose } = this.opts;
    if (verbose) console.log('📗', ...args);
  }

  run() {
    this.log('run cli: ', __dirname, this.args, this.opts, pkg.version);
  }
}

new CliApp().run();
