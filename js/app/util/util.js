/*
 * Util.js : Contains various utility functions and objects.
 */
define(
[
    'app/util/dieRoller'
],
function (dieRoller) {
    return {
        scatterDirections: ['N','NE','SE','S','SW','NW'],

        /**
         * Roll a random scatter direction
         */
        rollScatterDirection: function() {
            var roll = dieRoller.roll().total;
            return this.scatterDirections[roll - 1];
        },

        /**
         * Returns a value clamped between the two specified values, inclusive.
         *
         */
        clamp: function(value, min, max) {
            return Math.max(min, Math.min(value, max));
        },

        /**
         * Returns true if the value is between the indicated values,
         * inclusive.
         */
        checkClamped: function(value, min, max) {
            return value >= min && value <= max;
        }
    }
});
