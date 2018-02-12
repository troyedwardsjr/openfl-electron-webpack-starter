const electron = require('electron-connect').server;

function ElectronConnectPlugin() {
}

ElectronConnectPlugin.prototype.apply = function(compiler) {
	function restart() {
		if (typeof this.server === 'undefined') {
      this.server = electron.create({
				path: __dirname,
				logLevel: 0
			});
      this.server.start();
    } else {
    	this.server.reload();
    }
	}
	compiler.plugin('done', restart);
};

module.exports = ElectronConnectPlugin;