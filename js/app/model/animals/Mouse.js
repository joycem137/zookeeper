/*
 * Directions
 */
define(
[
	'jquery',
	'app/model/BoardObject'
],
function ($, BoardObject) {
 	var Mouse = BoardObject.extend({
		init: function(id, currentState) {
			this._super(id, currentState);
		},
		
		doStep: function(gameState) {
			return gameState;
		},
		
		clone: function() {
			return new Mouse(this.id, $.extend({}, this.currentState));
		},
		
		name: "mouse",
		types: ["prey"],
		image: 'img/mouse.jpg'
	});
	return Mouse;	
});