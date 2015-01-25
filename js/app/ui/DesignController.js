/*
 * DesignController
 */
define(
[
    'jquery',
    'app/ui/ItemSelector',
    'app/model/scenery/Bush',
    'app/model/animals/Mouse',
    'app/model/tools/Cheese',
    'app/AppSettings',
    'app/model/Directions'
],
function ($, ItemSelector, Bush, Mouse, Cheese, AppSettings, Directions) {
    var DesignController = function(boardModel, boardRenderer){
        this._boardModel = boardModel;
        this._boardRenderer = boardRenderer;
        this._id = 0;

        this._itemMap = {
            mouse: Mouse,
            cheese: Cheese,
            bush: Bush
        };

        this._selectedItem = 'mouse';

        var imageArray = [];

        for (var name in this._itemMap) {
            var item = this._itemMap[name];
            imageArray.push({
                image: item.prototype.image,
                name: name
            });
        }

        this._itemSelector = new ItemSelector(imageArray);
    };

    DesignController.prototype = {
        create: function() {
            var self = this;
            var itemSelectorDiv = this._itemSelector.create();

            itemSelectorDiv.click(function(mouseEvent) {
                var selectedItemDiv = mouseEvent.target;
                self._selectedItem = selectedItemDiv.id;
            });
            this._itemSelector.render();

            return itemSelectorDiv;
        },

        enable: function() {
            var boardModel = this._boardModel;
            var boardRenderer = this._boardRenderer;
            var self = this;
            boardRenderer.onMouseClick(function(row, col) {
                var SelectedBoardObjectConstructor = self._itemMap[self._selectedItem];

                boardModel.addObject(new SelectedBoardObjectConstructor(self._id++, {
                    facing: Directions.NORTH,
                    row: row,
                    col: col
                }));
                boardRenderer.render();
            });

        },

        render: function() {
            this._itemSelector.render();
        }
    };

    return DesignController;
});
