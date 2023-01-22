"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	theme: 'md',
	routes: routes,
	view: {
		pushState: true,
	},

});
var game = new Framework7({
	root: '/game/',
	theme: 'md',
	routes: routes,
	view: {
		pushState: true,
	},

});

var mainView = app.views.create('.view-main', {
	url: './index.html'
});
var mainView = game.views.create('.view-main', {
	url: './apps/game.html'
});
