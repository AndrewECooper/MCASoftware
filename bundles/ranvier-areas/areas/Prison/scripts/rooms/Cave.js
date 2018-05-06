'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        if (player.entered4Before > 0){
          return;
        }

        Broadcast.sayAt(player);
        Broadcast.sayAt(player, `<b><blue>A larger, more grotesque mouse steps forward to meet you.</blue></b>`, 80);
        const quest = state.QuestFactory.create(state, 'Prison:4', player);
        if (player.questTracker.canStart(quest)) {
          player.questTracker.start(quest);
        }
        player.entered4Before = (player.entered4Before || 0) + 1;  
        
      }
    }
  };
};

