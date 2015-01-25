/**
 * Interface for Board Objects
 */
define(
[
 'lib/Class',
 'app/model/Directions'
],
function (Class, Directions) {
    return Class.extend({
		init: function(id, currentState) {
			this.id = id;
			this._currentState = currentState;
		},
	    // returns the current facing of this object
		state: get function() {
			return this._currentState;
		},

		// returns a new game state based on the object's behavior
		doStep: function(gameState) {
			return gameState;
		},
		
		// true if this object blocks line of sight and false otherwise
		isLineOfSightBlocking: false,
		// true if this object blocks movement and flase otherwise
		isMovementBlocking: false,		
		// the qualitative properties of this object.
		types: [],
		// the unique name of this type of object 
		name: "empty"
    });
});