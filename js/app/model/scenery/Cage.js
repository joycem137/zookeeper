/*
 * Cage
 */
define(
[
    'jquery',
    'app/model/BoardObject'
],
function ($, BoardObject) {
    var Cage = BoardObject.extend({
        init: function(id, currentState) {
            this._super(id, currentState)
        },

        clone: function() {
            return new Cage(this.id, $.extend({}, this.currentState));
        },

        name: "Cage",
        types: ["scenery"],
        image: 'img/cage.jpg',
        isLineOfSightBlocking: true,
        isMovementBlocking: true
    });
    return Cage;
});