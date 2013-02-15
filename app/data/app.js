var app = module.exports = require('appjs');

app.serveFilesFrom(__dirname + '/content');

var window = app.createWindow({
    width: 250,
    height: 460,
    icons: __dirname + '/content/icons'
});

window.on('create', function () {
    window.frame.show();
    window.frame.center();
});

window.on('ready', function () {
    window.process = process;
    window.module = module;

    function F12(e) {
        return e.keyIdentifier === 'F12'
    }

    function Command_Option_J(e) {
        return e.keyCode === 74 && e.metaKey && e.altKey
    }

    window.addEventListener('keydown', function (e) {
        if (F12(e) || Command_Option_J(e)) {
            window.frame.openDevTools();
        }
    });
});

window.on('close', function () {
    console.log("Window Closed");
});
