/**
 * Interface for Board Objects
 */
define(
[
 'lib/Class'
],
function (Class) {
    var BoardObjectState = Class.extend({
		init: function(y, x, facing) {
			this.y = y;
			this.x = x;
			this.facing = facing;
		},
	    
		clone: function() {
			return new BoardObjectState(y, x, facing);
		}
    });
	return BoardObjectState;
});