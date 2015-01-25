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
			return this.objects[id + ''];
		},
		
		getObjectAt: function(row, col) {
			var id = this.board[row + ',' + col];
			return this.objects[id];
		},
		
		addObject: function(boardObject) {
			var state = boardObject.currentState;
			this.board[state.col + ',' +  state.row] = boardObject.id;
			this.objects[boardObject.id + ''] = boardObject;
		},
		
		removeObject: function(id) {
			var boardObject = this.objects[id + ''];
			
			if(typeof id == 'undefined') {
				return undefined;
			}
			
			this.board[boardObject.col + ',' + boardObject.row] = undefined;
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
				if(xMin <= current.row 
					&& xMax >= current.row
					&& yMin <= current.col
					&& yMax >= current.col) {
						var currentDistance = sqrt((current.row - col) ^ 2) 
						+ sqrt((current.col - row) ^ 2);
						
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
			
			var priorityQueue = [];
			
			for (var kay in near) {
				var inSquare = near[kay];
				var visible = [];
				var stopLineOfSight = false;
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