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
    'app/model/Board',
    'app/model/BoardObject',
    'app/ui/BoardRenderer',
    'app/model/Directions',
    'simpleAudio',
    'log', // Update the log functions.
    'app/util/polyfills'
],
function($, Board, BoardObject, BoardRenderer, Directions, simpleAudio) {
    $(document).ready(function() {
        var id = 0;
        var body = $('body');

        var boardModel = new Board();
        var boardRenderer = new BoardRenderer(boardModel);
        boardRenderer.create().appendTo(body);
        boardRenderer.render();

        $(document).click(function(mouseEvent) {
            boardModel.addObject(new BoardObject(id++, {
                facing: Directions.NORTH,
                row: 5,
                col: 5
            }));
            boardRenderer.render();
        });
    });
});