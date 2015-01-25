/*
 * Modifications to the String prototype, for syntactic sugar.
 */
define(function() {
    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) === 0;
    };

    String.prototype.endsWith = function(suffix) {
        return this.match(suffix+"$") == suffix;
    };

    String.prototype.capitalize = function(){
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };
});
