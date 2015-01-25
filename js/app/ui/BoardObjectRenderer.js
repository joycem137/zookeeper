/*
 * BoardObjectRenderer
 */
define(
[
    'jquery'
],
function ($) {
    var gridSize = 50;

    var animationProps = {
        duration: 1000,
        easing: 'linear'
    };

    var BoardObjectRenderer = function(boardObject) {
        this._boardObject = boardObject;
        this._oldState = $.extend({}, boardObject.currentState);
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
            var oldState = this._oldState;
            var oldX = oldState.col * gridSize;
            var oldY = oldState.row * gridSize;

            var newState = this._boardObject.currentState;
            var newY = newState.row * gridSize;
            var newX = newState.col * gridSize;

            this._topDiv.animate({ "top": newY +'px', "left": newX + "px"});

            // Animate the rotation
            this._topDiv.animateRotate(newState.facing, animationProps, oldState.facing);

            this._oldState = $.extend({}, newState);
        }
    };

    return BoardObjectRenderer;
});
