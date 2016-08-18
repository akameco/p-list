'use strict';
const readPkgUp = require('read-pkg-up');

module.exports = isDev =>
	readPkgUp().then(result => {
		const pkg = result.pkg;
		const field = isDev ? pkg.devDependencies : pkg.dependencies;
		return Object.keys(field);
	});
