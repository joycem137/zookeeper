/*
 * Mouse
 */
define(
[
    'jquery',
    'app/model/BoardObject'
],
function ($, BoardObject) {
    var Cheese = BoardObject.extend({
        init: function(id, currentState) {
            this._super(id, currentState)
        },

        clone: function() {
            return new Cheese(this.id, $.extend({}, this.currentState));
        },

        name: "cheese",
        types: ["food"],
        image: 'img/cheese.jpg'
    });
    return Cheese;
});