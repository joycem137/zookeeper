/*
 * Bush
 */
define(
[
    'jquery',
    'app/model/BoardObject'
],
function ($, BoardObject) {
    var Bush = BoardObject.extend({
        init: function(id, currentState) {
            this._super(id, currentState)
        },

        clone: function() {
            return new Bush(this.id, $.extend({}, this.currentState));
        },

        name: "bush",
        types: ["scenery"],
        image: 'img/bush.jpg',
        isLineOfSightBlocking: true,
        isMovementBlocking: true
    });
    return Bush;
});