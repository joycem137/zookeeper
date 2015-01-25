/**
 * Interface for The Board
 */
define(
[
 'lib/Class'
],
function (Class) {
	 var Board = Class.extend({
		init: function() {
			this.board = {};
			this.objects = {};
		},
		
		getObject: function(id) {
			return objects[id + ''];
		},
		
		getObjectAt: function(row, cow) {
			var object = this.board[row + ',' + col];
			return object;
		},
		
		addObject: function(boardObject) {
			var state = boardObject.state;
			this.board[state.y + ',' +  state.x];
			this.objects[boardObject.id + ''] = boardObject;
		},
		
		removeObjectAt: function(row, col) {
			var id = this.board[row + ',' + col].id;
			this.board[row + ',' + col] = undefined;
			this.objects[id + ''] = undefined;
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
			for (var key in this.board) {
				var boardObject = this.board[key];
				boardClone.addObject(boardObject.clone());
			}
			return boardClone;
		}
	});
	
	return Board;
});