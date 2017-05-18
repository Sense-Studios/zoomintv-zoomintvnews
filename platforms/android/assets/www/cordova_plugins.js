cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
        "id": "pushwoosh-cordova-plugin.PushNotification",
        "clobbers": [
            "plugins.pushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/phonegap-plugin-multiview/www/multiview.js",
        "id": "phonegap-plugin-multiview.multiview",
        "clobbers": [
            "PGMultiView"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wizviewmanager/www/wizViewManager.js",
        "id": "cordova-plugin-wizviewmanager.WizViewManager",
        "clobbers": [
            "window.wizViewManager"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wizviewmanager/www/wizViewMessenger.js",
        "id": "cordova-plugin-wizviewmanager.WizViewMessenger",
        "clobbers": [
            "window.wizViewMessenger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-statusbar": "2.2.3",
    "pushwoosh-cordova-plugin": "6.5.2",
    "cordova-plugin-inappbrowser": "1.7.1",
    "phonegap-plugin-multiview": "0.0.1",
    "cordova-plugin-wizviewmanager": "1.4.0"
};
// BOTTOM OF METADATA
});