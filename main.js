var menubar = require('menubar');
var mb = menubar({width: 400, height: 400, fullscreen: false})

mb.on('ready', function ready () {
	console.log('Running bitcoinbar ticker in your operating system.')
})

/*mb.on('after-create-window', function(){
	mb.window.openDevTools();
})*/