'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');
 // const AreaData = require(srcPath + 'AreaData');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        if (player.entered5Before > 0){
            return;
          }
  
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, "<b>a guard stands before the door, you're in for a fight</b>", 80);
                            
        player.entered5Before = (player.entered5Before || 0) + 1; 
            }
        }
    };
};