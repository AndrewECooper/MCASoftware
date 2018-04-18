'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      look:state => function (player) {
        const quest = state.QuestFactory.create(state, 'Prison:5', player);
        if (player.questTracker.canStart(quest)) {
          player.questTracker.start(quest);
        }
      }
    }
  };
};