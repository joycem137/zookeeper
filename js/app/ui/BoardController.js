/**
 * Board.js TODO: Describe this module.
 */
define(
[
    'jquery'
],
function ($) {
    var BoardController = function() {

    };

    BoardController.prototype = {
        create: function() {
            var topDiv = $('<div id="board"></div>');
            topDiv.append(('<img id="boardBackground" src="img/BoardBackground.png" />'));
            return topDiv;
        },

        render: function(updateData) {

        }
    };

    return BoardController;
});