/*
 * ItemSelector
 */
define(
[
    'jquery'
],
function ($) {
    var ItemSelector = function(objectList){
        this._objectList = objectList || [];
    };

    ItemSelector.prototype = {
        create: function() {
            var topDiv = $('<div id="itemSelector"></div>');
            this._topDiv = topDiv;
            return topDiv;
        },

        setItemList: function(objectList) {
            this._objectList = objectList || [];
        },

        render: function() {
            var self = this;
            this._topDiv.empty();
            this._objectList.forEach(function(object) {
                var objectDiv = $('<img id="' + object.name + '" src="' + object.image + '"/>').
                    addClass('itemSelectorObject');

                self._topDiv.append(objectDiv);
            });
        }
    };

    return ItemSelector;
});
