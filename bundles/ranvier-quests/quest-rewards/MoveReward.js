'use strict';

const LevelUtil = require('../../ranvier-lib/lib/LevelUtil');

module.exports = srcPath => {
  const QuestReward = require(srcPath + 'QuestReward');

  return class MoveReward extends QuestReward {
    static reward(GameState, quest, config, player) {
      let npc;
      state.MobManager.mobs.forEach(function(mob) {
        if (mob.id == 6 && mob.area.name == "Prison") npc = mob;
      });
  
      let destination = state.RoomManager.rooms.get("Prison:11");
  
      npc.moveTo(destination, ()    => {
        Broadcast.sayAt(player, "The creepy old dude runs away screaming!");
      });
      console.log("activation");
    }
      

    static display(GameState, quest, config, player) {
      return ``
    }
  };
};
