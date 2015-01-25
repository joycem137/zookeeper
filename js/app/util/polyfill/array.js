/*
 * arrayPolyfill
 */
define(function () {

    if (Array.prototype.find === undefined) {
        Array.prototype.find = function(callback, thisArg) {
            for(var i = 0, len = this.length; i < len; i++) {
                if (callback.call(thisArg, this[i], i, this)) {
                    return this[i];
                }
            }
            return undefined;
        }
    }

    /**
     * Perform a shallow clone of this array.
     *
     * @return {Array}
     */
    Array.prototype.clone = function() {
        return this.slice(0,this.length);
    };

    // We gotta return something, so let's return Array.
    return Array;
});
