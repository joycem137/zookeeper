/*
 * BoardObjectRenderer
 */
define(
[
    'jquery'
],
function ($) {
    var BoardObjectRenderer = function(boardObject) {
        this._boardObject = boardObject;
    };

    BoardObjectRenderer.prototype = {
        create: function() {
            var topDiv = $('<div class="boardobject"></div>');
            topDiv.append('<img class="boardobject background" src="' + this._boardObject.image + '"/>');
            return topDiv;
        },

        render: function() {
            // We'll need to adjust facing and do animation here.

        }
    };

    return BoardObjectRenderer;
});
