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
    'app/model/scenery/Bush',
    'app/ui/BoardRenderer',
    'app/model/Directions',
    'app/AppSettings',
    'simpleAudio',
    'log', // Update the log functions.
    'app/util/polyfills'
],
function($, Board, Bush, BoardRenderer, Directions, AppSettings, simpleAudio) {
    $(document).ready(function() {
        var id = 0;
        var body = $('body');

        var boardModel = new Board();
        var boardRenderer = new BoardRenderer(boardModel);
        var boardRendererDiv = boardRenderer.create();
        body.append(boardRendererDiv);
        boardRenderer.render();

        boardRendererDiv.click(function(mouseEvent) {
            var gridSize = AppSettings.gridSize;

            var row = Math.floor(mouseEvent.offsetY / gridSize);
            var col = Math.floor(mouseEvent.offsetX / gridSize);

            boardModel.addObject(new Bush(id++, {
                facing: Directions.NORTH,
                row: row,
                col: col
            }));
            boardRenderer.render();
        });
    });
});