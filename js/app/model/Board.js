/**
 * Interface for The Board
 */
define(
[
 'lib/Class',
 'app/model/Directions'
],
function (Class, Directions) {
	 var Board = Class.extend({
		init: function() {
			this.objects = {};
		},
		
		getObject: function(id) {
			return this.objects[id + ''];
		},
		
		addObject: function(boardObject) {
			this.objects[boardObject.id + ''] = boardObject;
		},
		
		// removes an object from the board, returning the object
		removeObject: function(id) {
			var boardObject = this.objects[id + ''];
			this.objects[id + ''] = undefined;
			return boardObject;
		},
		
		// get all objects within a certain distance of a given row and column, order first by
		// distance, then by priority
		getObjectsNear: function(row, col, distance) {
			// create priority list
			var near = {};
			for (var i = 0; i <= distance * 2; i++) {
				near[i + ''] = [];
			}
			
			var xMin = col - distance;
			var xMax = col + distance;
			var yMin = row - distance;
			var yMax = row + distance;
			// search for objects within the given square, inclusive
			for (var key in this.objects) {
				var current = this.objects[key];
				if(xMin <= current.row 
					&& xMax >= current.row
					&& yMin <= current.col
					&& yMax >= current.col) {
						var currentDistance = sqrt((current.row - col) ^ 2) 
						+ sqrt((current.col - row) ^ 2);
						
						near[currentDistance + ''].push(current);
					}
			}
			
			// turn the priority list into an array
			var priorityQueue = [];
			for (var kay in near) {
				priorityQueue.concat(near[kay]);
			}
			
			return priorityQueue;
		},
		
		// get all objects that can be seen in a straight line from a given square
		// line of sight blocking objects block line of sight
		getObjectsInLineOfSight: function(row, col, distance, direction) {
			// create a priority list
			var near = {};
			for (var i = 0; i <= distance; i++) {
				near[i + ''] = [];
			}
			// search for objects in the given direction within the given distance, inclusive
			for (var key in this.objects) {
				var current = this.objects[key];
				
				if(direction == Directions.NORTH 
					&& current.col <= row 
					&& current.col >= row - distance) {
						near[(row - current.col) + ''].push(current);
				} else if(direction == Directions.SOUTH 
					&& current.col >= row 
					&& current.col <= row + distance) {
						near[(current.col - row) + ''].push(current);
				} else if(direction == Directions.WEST 
					&& current.row <= col 
					&& current.row >= col - distance) {
						near[(col - current.row) + ''].push(current);
				} else if(direction == Directions.EAST 
					&& current.row >= col 
					&& current.row <= col + distance) {
						near[(current.row - col) + ''].push(current);
				} 
			}
			
			// read out the priority queue into an ordered array
			var priorityQueue = [];
			
			for (var kay in near) {
				var inSquare = near[kay];
				var visible = [];
				var stopLineOfSight = false;
				// if a square contains objects that block line of sight, only return
				// the objects in that square that block line of sight, then return no
				// objects in more distance squares.
				for(var j = 0; j < inSquare.length; j++) {
					if (inSquare[j].isLineOfSightBlocking && stopLineOfSight) {
						visible.push(inSquare[j]);
					} else if (inSquare[j].isLineOfSightBlocking) {
						visible = [];
						stopLineOfSight = true;
						visible.push(inSquare[j]);
					} else if (!stopLineOfSight) {
						visible.push(inSquare[j]);
					}
				}
				priorityQueue.append(visible);
				
				if (stopLineOfSight) {
					return priorityQueue;
				}
			}
			
			return priorityQueue;
		},
		
		// tells all objects on the board to, in serial, process the game state and
		// make their moves, in first added, first processed order
		doStep: function(gameState) {
			var currentState = gameState;
			for (var key in this.objects) {
				currentState = this.objects[key].doStep(gameState);
			}
			return currentState;
		},
		
		clone: function() {
			var boardClone = new Board();
			for (var key in this.objects) {
				var boardObject = this.objects[key];
				boardClone.addObject(boardObject.clone());
			}
			return boardClone;
		}
	});
	
	return Board;
});