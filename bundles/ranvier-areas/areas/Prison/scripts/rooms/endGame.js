'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, `<b><cyan>You come to a harbor, the mice have left a boat for you.</cyan> You can smell the sea as you climb into the boat and work the sails.  <White> You escaped the prison, well done.  Now you sail into the open sea with no destination, you are free.</white> You now return to the start of the game.</b>`, 80);
      }
    }

  };

};
/* return to starting room (info in playerevents.js "killed")