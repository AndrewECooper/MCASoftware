'use strict';

const LevelUtil = require('../../ranvier-lib/lib/LevelUtil');

module.exports = srcPath => {
  const QuestReward = require(srcPath + 'QuestReward');

  return class MoveReward extends QuestReward {
    static reward(GameState, quest, config, player) {
      const mover = this._getStuff(quest, config);
      const mRoom = this._getStuff(quest, config)
        mover.moveTo(mRoom, _ => {
          state.CommandManager.get('look').execute(null, mover);
      });
    }
  
    static display(GameState, quest, config, player) {
      return ``
    }
    

    static _getStuff(quest, config) {
      config = Object.assign({
        mover: null,
        mRoom: null,
      }, config);

      if (!config.mover) {
        throw new Error(`Quest [${quest.id}] currency reward has invalid configuration`);
      }

      return config.mover;
    }
  };
};
