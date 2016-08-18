#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pList = require('./');

const cli = meow(`
	Usage
	  $ p-list

	Options
	  --save,-S       [Default: true]
	  --save-dev,-D   [Default: false]

	Examples
	  $ p-list
	  meow read-pkg-up
	  $ p-list -D
	  xo ava
`, {
	alias: {
		S: 'save',
		D: 'save-dev'
	}
});

pList(cli.flags.saveDev).then(result => {
	console.log(result.join(' '));
});
