/**
 * Board.js TODO: Describe this module.
 */
define(
[
    'jquery',
    'app/ui/BoardObjectRenderer'
],
function ($, BoardObjectRenderer) {
    var BoardController = function(boardObjectModel) {
        this._boardObjectModel = boardObjectModel;
    };

    BoardController.prototype = {
        create: function() {
            var topDiv = $('<div id="board"></div>');
            topDiv.append(('<img id="boardBackground" src="img/BoardBackground.png" />'));

            var boardObjectRenderer = new BoardObjectRenderer(this._boardObjectModel);
            this._boardObject = boardObjectRenderer;

            boardObjectRenderer.create().appendTo(topDiv);

            return topDiv;
        },

        render: function(updateData) {
            this._boardObject.render();
        }
    };

    return BoardController;
});