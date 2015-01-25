/*
 * BoardObjectRenderer
 */
define(
[
    'jquery'
],
function ($) {
    var gridSize = 50;
    var BoardObjectRenderer = function(boardObject) {
        this._boardObject = boardObject;
    };

    BoardObjectRenderer.prototype = {
        create: function() {
            var topDiv = $('<div class="boardobject"></div>');
            this._topDiv = topDiv;

            topDiv.append('<img class="boardobject background" src="' + this._boardObject.image + '"/>');

            return topDiv;
        },

        render: function() {
            // We'll need to adjust facing and do animation here.
            var objectState = this._boardObject.currentState;
            var y = objectState.row * gridSize;
            var x = objectState.col * gridSize;
            this._topDiv.css({ "top": y +'px', "left": x + "px" });
        }
    };

    return BoardObjectRenderer;
});
