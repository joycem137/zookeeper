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
    'app/model/animals/Mouse',
    'app/model/tools/Cheese',
    'app/ui/BoardRenderer',
    'app/ui/ItemSelector',
    'app/model/Directions',
    'app/AppSettings',
    'simpleAudio',
    'log', // Update the log functions.
    'app/util/polyfills'
],
function($, Board, Bush, Mouse, Cheese, BoardRenderer, ItemSelector, Directions, AppSettings, simpleAudio) {
    $(document).ready(function() {
        var id = 0;
        var body = $('body');

        body.append(('<img id="background" src="img/background.png" />'));

        var boardModel = new Board();
        var boardRenderer = new BoardRenderer(boardModel);
        var boardRendererDiv = boardRenderer.create();
        body.append(boardRendererDiv);
        boardRenderer.render();

        var itemSelector = new ItemSelector([
            new Mouse(),
            new Cheese(),
            new Bush()
        ]);

        var itemSelectorDiv = itemSelector.create();
        itemSelectorDiv.appendTo(body);

        itemSelectorDiv.click(function(mouseEvent) {
            console.log('Item selector clicked');
        });
        itemSelector.render();

        boardRendererDiv.click(function(mouseEvent) {
            var gridSize = AppSettings.gridSize;

            var row = Math.floor(mouseEvent.offsetY / gridSize);
            var col = Math.floor(mouseEvent.offsetX / gridSize);

            boardModel.addObject(new Cheese(id++, {
                facing: Directions.NORTH,
                row: row,
                col: col
            }));
            boardRenderer.render();
        });
    });
});