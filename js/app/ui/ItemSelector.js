/*
 * ItemSelector
 */
define(
[
    'jquery'
],
function ($) {
    var ItemSelector = function(objectMap){
        this._objectMap = objectMap || {};
        this._clickHandler = function(item) {};
    };

    ItemSelector.prototype = {
        create: function() {
            var self = this;
            var topDiv = $('<div id="itemSelector"></div>');
            this._topDiv = topDiv;

            topDiv.click(function(mouseEvent) {
                var objectMap = self._objectMap;
                var targetName = mouseEvent.target.id;
                var item = objectMap[targetName];

                self._clearSelected();
                item.$div.
                    addClass('selected');

                self._clickHandler(item.item);
            });

            return topDiv;
        },

        setItemList: function(objectMap) {
            this._objectMap = objectMap || {};
        },

        onMouseClick: function(clickHandler) {
            this._clickHandler = clickHandler;
        },

        _clearSelected: function() {
            var objectMap = this._objectMap;
            for (var key in objectMap) {
                var object = objectMap[key];
                object.$div.
                    removeClass('selected');
            }
        },

        render: function() {
            var self = this;
            var objectMap = this._objectMap;
            this._topDiv.empty();
            for (var key in objectMap) {
                var object = objectMap[key];
                var objectDiv = $('<img id="' + key + '" src="' + object.image + '"/>').
                    addClass('itemSelectorObject');

                object.$div = objectDiv;

                self._topDiv.append(objectDiv);

            }
        }
    };

    return ItemSelector;
});
