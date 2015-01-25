// A little bit of help to prevent QUnit from running when we compile.
//if (QUnit) {
//    QUnit.config.autoload = false;
//    QUnit.config.autostart = false;
//}

require.config({
    //By default load any module IDs from js/app
    baseUrl: 'js',

    // Configuration parameters for various modules.
    config: {
        simpleAudio: {
            path: 'audio/'
        }
    },

    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
            //If the CDN location fails, load from this location
            'lib/jquery-2.1.0'
        ],
        log: [
            'lib/log'
        ],
        QUnit: [
            'lib/qunit-1.14.0'
        ],
        string: [
            'app/util/string'
        ],
        simpleAudio: [
            'app/util/simpleAudio'
        ]
    },
    shim: {
        'QUnit': {
            exports: 'QUnit',
            init: function() {
                QUnit.config.autoload = false;
                QUnit.config.autostart = false;
            }
        }
    }
});

// require the unit tests.
require(
    [
        'QUnit',
        'log', // Update the log functions.
        'app/util/polyfills'
    ],
    function(QUnit) {
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);