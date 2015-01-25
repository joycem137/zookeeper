requirejs.config({
    //By default load any module IDs from js/app
    baseUrl: 'js',

    // Configuration parameters for various modules.
    config: {
        simpleAudio: {
            path: 'audio/'
        }
    },

    // Paths from which to load various modules.
    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
            //If the CDN location fails, load from this location
            'lib/jquery-2.1.0'
        ],
        log: [
            'lib/log'
        ],
        string: [
            'app/util/string'
        ],
        simpleAudio: [
            'app/util/simpleAudio'
        ]
    }
});

// Specify required files.  These should be converted into require.js modules.
require(
[
    'jquery',
    'app/model/BoardObject',
    'app/ui/BoardController',
    'simpleAudio',
    'log', // Update the log functions.
    'app/util/polyfills'
],
function($, BoardObject, BoardController, simpleAudio) {
    $(document).ready(function() {
        var body = $('body');

        var testObject = new BoardObject(1);

        var board = new BoardController(testObject);
        board.create().appendTo(body);
    });
});