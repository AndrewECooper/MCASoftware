'use strict';


module.exports = srcPath => {
    const ItemFactory = require(srcPath + 'ItemFactory');
    const QuestReward = require(srcPath + 'QuestReward');
    const ItemManager = require(srcPath + 'ItemManager');
    

    return class CurrencyReward extends QuestReward {
        static reward(GameState, quest, config, player) {
          const item = this._getItem(quest, config)
          this.create(state.room, item);
          this.add(item)
        } 
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhh!!!
        static display(GameState, quest, config, player) {
          const item = this._getItem(quest, config)
          return `Items: ${item}`  // literally says "Prison:4" in game
        }

        static _getItem(quest, config) {
          config = Object.assign({
            item: null,
          }, config);
          
          if (!config.item) {
              throw new Error(`ItemReward is still wrong`);
           }
           return config.item;
        }
    };
  };

