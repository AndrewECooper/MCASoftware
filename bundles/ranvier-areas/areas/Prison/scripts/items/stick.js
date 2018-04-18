'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      get: state => function (player) {
        const quest = state.QuestFactory.create(state, 'Prison:2', player);
        if (player.questTracker.canStart(quest)) {
          player.questTracker.start(quest);
        }        
      }
    }
  };
};
