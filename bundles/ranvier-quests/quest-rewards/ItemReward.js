'use strict';

const LevelUtil = require('../../ranvier-lib/lib/LevelUtil');

module.exports = srcPath => {
  const QuestReward = require(srcPath + 'QuestReward');
  /**
   * Quest reward that gives experience
   *
   * Config options:
   *   item: item to be given, required
   */
  return class ItemReward extends QuestReward {
    static reward(GameState, quest, config, player) {
      const item = this._getItem(quest, config);
      player.emit('You received a(n)', config.item);
    }

    static _getItem(quest, config) {
      config = Object.assign({
        item: null
      }, config);

      if (!config.item) {
        throw new Error(`Quest [${quest.id}] item reward has invalid configuration`);
      }

    // const moveRoom = state.RoomManager.getRoom(config.moveNpc.toRoom);
       const ItemReward = state.ItemManager.add(config.item)


        
    }
  };
};