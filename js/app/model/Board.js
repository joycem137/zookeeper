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
			this.board = {};
			this.objects = {};
		},
		
		getObject: function(id) {
			return objects[id + ''];
		},
		
		getObjectAt: function(row, cow) {
			var id = this.board[row + ',' + col];
			return objects[id];
		},
		
		addObject: function(boardObject) {
			var state = boardObject.state;
			this.board[state.y + ',' +  state.x] = boardObject.id;
			this.objects[boardObject.id + ''] = boardObject;
		},
		
		removeObject: function(id) {
			var boardObject = this.objects[id + ''];
			
			if(typeof id == 'undefined') {
				return undefined;
			}
			
			this.board[boardObject.y + ',' + boardObject.x] = undefined;
			this.objects[id + ''] = undefined;
			return boardObject;
		},
		
		removeObjectAt: function(row, col) {
			var id = this.board[row + ',' + col];
			
			if(typeof id == 'undefined') {
				return undefined;
			}
			
			var returnVal = this.objects[id];
			this.board[row + ',' + col] = undefined;
			this.objects[id] = undefined;
			
			return returnVal;
		},
		
		getObjectsNear: function(row, col, distance) {
			var near = {};
			for (var i = 0; i <= distance * 2; i++) {
				near[i + ''] = [];
			}
			
			var xMin = col - distance;
			var xMax = col + distance;
			var yMin = row - distance;
			var yMax = row + distance;
			
			for (var key in this.objects) {
				var current = this.objects[key];
				if(xMin <= current.x 
					&& xMax >= current.x
					&& yMin <= current.y
					&& yMax >= current.y) {
						var currentDistance = sqrt((current.x - col) ^ 2) 
						+ sqrt((current.y - row) ^ 2);
						
						near[currentDistance + ''].push(current);
					}
			}
			
			var priorityQueue = [];
			for (var kay in near) {
				priorityQueue.concat(near[kay]);
			}
			
			return priorityQueue;
		},
		
		getObjectsInLineOfSight: function(row, col, distance, direction) {
			var near = {};
			for (var i = 0; i <= distance; i++) {
				near[i + ''] = [];
			}
			
			for (var key in this.objects) {
				var current = this.objects[key];
				
				if(direction == Directions.NORTH 
					&& current.y <= row 
					&& current.y >= row - distance) {
						near[(row - current.y) + ''].push(current);
				} else if(direction == Directions.SOUTH 
					&& current.y >= row 
					&& current.y <= row + distance) {
						near[(current.y - row) + ''].push(current);
				} else if(direction == Directions.WEST 
					&& current.x <= col 
					&& current.x >= col - distance) {
						near[(col - current.x) + ''].push(current);
				} else if(direction == Directions.EAST 
					&& current.x >= col 
					&& current.x <= col + distance) {
						near[(current.x - col) + ''].push(current);
				} 
			}
			
			var priorityQueue = [];
			
			for (var kay in near) {
				var inSquare = near[kay];
				var visible = [];
				var stopLineOfSight = false;
				for(var j = 0; j < inSquare.length, j++) {
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
		}
		
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