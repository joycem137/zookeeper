/*
 * DesignController
 */
define(
[
    'jquery',
    'app/ui/ItemSelector',
    'app/model/scenery/Bush',
    'app/model/scenery/Cage',
    'app/model/animals/Mouse',
    'app/model/animals/Elephant',
    'app/model/tools/Cheese',
    'app/model/tools/Zookeeper',
    'app/AppSettings',
    'app/model/Directions'
],
function ($, ItemSelector, Bush, Cage, Mouse, Elephant, Cheese, Zookeeper, AppSettings, Directions) {
    var DesignController = function(boardModel, boardRenderer){
        this._boardModel = boardModel;
        this._boardRenderer = boardRenderer;
        this._id = 0;

        this._itemMap = {
            mouse: Mouse,
            elephant: Elephant,
            cheese: Cheese,
            bush: Bush,
            cage: Cage,
            zookeeper: Zookeeper
        };

        this._selectedItem = Mouse;

        var itemSelectorDefinition = {};

        for (var name in this._itemMap) {
            var item = this._itemMap[name];
            itemSelectorDefinition[name] = {
                image: item.prototype.image,
                item: item
            };
        }

        this._itemSelector = new ItemSelector(itemSelectorDefinition);
    };

    DesignController.prototype = {
        create: function() {
            var self = this;
            var itemSelectorDiv = this._itemSelector.create();

            this._itemSelector.render();

            return itemSelectorDiv;
        },

        enable: function() {
            var boardModel = this._boardModel;
            var boardRenderer = this._boardRenderer;
            var self = this;

            this._itemSelector.onMouseClick(function(item) {
                self._selectedItem = item;
            });

            boardRenderer.onMouseClick(function(row, col) {
                var SelectedBoardObjectConstructor = self._selectedItem;

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
