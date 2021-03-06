#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');
const fetch = require('node-fetch');

// next packages:
require('@jswork/next');
require('@jswork/next-git-url');
require('@jswork/next-absolute-package');

const { version } = nx.absolutePackage();
const program = new Command();
const execSync = require('child_process').execSync;

const res = execSync('git config --get remote.origin.url');
const remoteUrl = res.toString().trim();
const gitUrl = new nx.GitUrl(remoteUrl);

const headers = {
  'Accept': 'application/vnd.github.switcheroo-preview+json',
  'Authorization': `token ${process.env.GITHUB_TOKEN}`,
  'Content-Type': 'application/vnd.api+json'
};

program.version(version);
program.option('-p, --pages', 'Set pages to master:docs.').parse(process.argv);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    init() {},
    request(inMethod) {
      const fullname = gitUrl.data['full_name'];
      return fetch(`https://api.github.com/repos/${fullname}/pages`, {
        headers,
        method: inMethod,
        body: JSON.stringify({
          source: {
            branch: 'master',
            path: '/docs'
          }
        })
      }).then((res) => res.json());
    },
    start() {
      if (program.pages) {
        this.request('DELETE').then((re) => {
          this.request('POST').then((res) => {
            console.log('res:', res);
          });
        });
      }
    }
  }
});
