/**
 * Board.js TODO: Describe this module.
 */
define(
[
    'jquery',
    'app/ui/BoardObjectRenderer',
    'app/AppSettings'
],
function ($, BoardObjectRenderer, AppSettings) {
    var BoardController = function(boardModel) {
        this._boardModel = boardModel;
        this._boardObjectRenderers = [];
        this._boardObjectIds = {};
        this._clickHandler = function(row, col) {};
    };

    BoardController.prototype = {
        create: function() {
            var self = this;
            var topDiv = $('<div id="board"></div>');
            this._topDiv = topDiv;

            // Add all the object renderers to the board that we started with.
            var boardObjects = this._boardModel.objects;
            var boardObject;
            for (var objectKey in boardObjects) {
                boardObject = boardObjects[objectKey];
                this._createObjectRenderer(boardObject);
            }

            topDiv.click(function(mouseEvent) {
                var gridSize = AppSettings.gridSize;

                var row = Math.floor(mouseEvent.offsetY / gridSize);
                var col = Math.floor(mouseEvent.offsetX / gridSize);

                self._clickHandler(row, col);
            });

            return topDiv;
        },

        render: function() {
            var boardModel = this._boardModel;
            var boardObjects = boardModel.objects;
            var boardObjectIds = this._boardObjectIds;

            // Remove stale renderers that are no longer around.
            this._boardObjectRenderers.forEach(function(renderer) {
                var objectIsStillOnBoard = boardModel.getObject(renderer.boardObject.id);
                if (!objectIsStillOnBoard) {
                    renderer.renderDeath();
                }
            });

            // Add new renderers for objects that have newly appeared.
            var boardObject;
            for (var objectKey in boardObjects) {
                boardObject = boardObjects[objectKey];
                if (!boardObjectIds[boardObject.id]) {
                    this._createObjectRenderer(boardObject);
                }
            }

            this._boardObjectRenderers.forEach(function(renderer) {
                renderer.render();
            });
        },

        onMouseClick: function(clickHandler) {
            this._clickHandler = clickHandler;
        },

        _createObjectRenderer: function(boardObject) {
            var newRenderer = new BoardObjectRenderer(boardObject);
            this._topDiv.append(newRenderer.create());
            this._boardObjectRenderers.push(newRenderer);
            this._boardObjectIds[boardObject.id] = new BoardObjectRenderer(boardObject);
        },
    };

    return BoardController;
});