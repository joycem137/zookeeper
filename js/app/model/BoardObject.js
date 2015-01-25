/**
 * Interface for Board Objects
 */
define(
[
    'lib/Class',
    'app/model/Directions'
],
function (Class, Directions) {
    var BoardObject = Class.extend({
		init: function(id, currentState) {
			this.id = id;
			this.currentState = currentState || {
                row: 8,
                col: 4,
                facing: Directions.NORTH
            };
		},

		// returns a new game state based on the object's behavior
		doStep: function(gameState) {
			return gameState;
		},
		
		clone: function() {
			return new BoardObject(this.id, this.currentState.clone());
		},
		
		// true if this object blocks line of sight and false otherwise
		isLineOfSightBlocking: false,
		// true if this object blocks movement and false otherwise
		isMovementBlocking: false,		
		// the qualitative properties of this object.
		types: [],
		// the unique name of this type of object 
		name: "empty",

        image: 'img/genericObject.jpg'
    });
	
	return BoardObject;
});