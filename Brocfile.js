/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	autoprefixer: {
		browsers: ['last 2 version'],
		cascade: false
	}
});

var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

// Sass src
var sassSources = [
	'app/styles'
]

// Compiling SASS
var appCss = compileSass(sassSources, 'app.scss', 'assets/app.css', {
	style: 'nested',
	sourcemap: 'none'
});

// Merging trees
var buildApp = mergeTrees([app.toTree(), appCss], {
	overwrite: true
});

module.exports = buildApp;
