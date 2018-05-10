'use strict';

module.exports = (srcPath) => {
  const prisonBasePath = srcPath.replace("/src/", "/bundles/ranvier-areas/areas/Prison/");
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        const quest = state.QuestFactory.create(state, 'Prison:3', player);
        if (player.questTracker.canStart(quest)) {
          player.questTracker.start(quest);
          }  
      
      let npc;
      state.MobManager.mobs.forEach(function(mob) {
        if (mob.id == 6 && mob.area.name == "Prison") npc = mob;
      });

      let destination = state.RoomManager.rooms.get("Prison:11");

      npc.moveTo(destination, ()    => {
        Broadcast.sayAt(player, "The creepy old dude runs away screaming!");
      });
      }
    }
  };
};
