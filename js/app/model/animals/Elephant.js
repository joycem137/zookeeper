/*
 * Elephant
 */
define(
[
    'jquery',
    'app/model/BoardObject'
],
function ($, BoardObject) {
    var Elephant = BoardObject.extend({
        init: function(id, currentState) {
            this._super(id, currentState);
        },

        doStep: function(gameState) {
            return gameState;
        },

        clone: function() {
            return new Elephant(this.id, $.extend({}, this.currentState));
        },

        name: "Elephant",
        types: [],
        image: 'img/elephant.jpg'
    });
    return Elephant;
});