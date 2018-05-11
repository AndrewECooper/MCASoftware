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
      }
    }
  };
};
