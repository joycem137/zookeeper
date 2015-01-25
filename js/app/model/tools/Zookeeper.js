/*
 * Zookeeper
 */
define(
[
    'jquery',
    'app/model/BoardObject'
],
function ($, BoardObject) {
    var Zookeeper = BoardObject.extend({
        init: function(id, currentState) {
            this._super(id, currentState)
        },

        clone: function() {
            return new Zookeeper(this.id, $.extend({}, this.currentState));
        },

        name: "Zookeeper",
        types: ["scenery"],
        image: 'img/zookeeper.jpg',
        isLineOfSightBlocking: true,
        isMovementBlocking: true
    });
    return Zookeeper;
});