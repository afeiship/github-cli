#! /usr/bin/env bun

import { Command, Option } from 'commander';
import gitInfo from '@jswork/git-info';
import readPkgJson from '@jswork/read-pkg-json';
import './bootstrap.ts';

const pkg = readPkgJson();
const program = new Command();

program.version(pkg.version);
program
  .addOption(new Option('-v, --verbose', 'show verbose log'))
  .addOption(new Option('-c, --create-pages', 'set pages to main:docs'))
  .addOption(new Option('-d, --destroy-pages', 'delete pages'))
  .parse(process.argv);

/**
 * @help: ghc -h
 * @description: ghc -f
 */

class CliApp {
  private readonly args: string[];
  private readonly opts: Record<string, any>;

  constructor() {
    this.args = program.args;
    this.opts = program.opts();
  }

  get ownerPath() {
    const url = gitInfo.url();
    return url.split(':')[1].replace('.git', '');
  }

  log(...args: any[]) {
    const { verbose } = this.opts;
    if (verbose) console.log('📗', ...args);
  }

  async createPages() {
    this.log('Creating pages...');
    await nx.$api.pages_create({
      owner_path: this.ownerPath,
      source: {
        branch: 'main',
        path: '/docs',
      },
    });
  }

  async destroyPages() {
    this.log('Destroying pages...');
    await nx.$api.pages_destroy({ owner_path: this.ownerPath });
  }

  run() {
    if (this.opts.createPages) void this.createPages();
    if (this.opts.destroyPages) void this.destroyPages();
  }
}

new CliApp().run();
