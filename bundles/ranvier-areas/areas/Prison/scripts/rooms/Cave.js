'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, `<b><yellow>A larger, more grotesque mouse steps forward to meet you.</yellow></b>`, 80);
        const quest = state.QuestFactory.create(state, 'Prison:4', player);
        if (player.questTracker.canStart(quest)) {
          player.questTracker.start(quest);
        }
        
      }
    }
  };
};

