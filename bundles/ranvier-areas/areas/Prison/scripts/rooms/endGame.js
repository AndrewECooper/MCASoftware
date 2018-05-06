'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');
  const bd = require(srcPath + 'DataManagement\\BundleDataManager');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, "<b>You can smell the sea as you climb into the boat and work the sails. " +
                                "<Red> You escaped the prison, well done.  Now you sail into the open " +
                                "sea with no destination, you are free.</Red> You now return to the " + 
                                "start of the game.</b>", 80);
        player.setAttributeToMax('health');

        console.log("Source Path: ", srcPath);
        new bd(state).loadBundles(srcPath.replace("\\src/", ""), true);
        
        let home = state.RoomManager.startingRoom;
        console.log("home = ", home);

        player.moveTo(home, _ => {
          state.CommandManager.get('look').execute(null, player);
        });

        player.inventory.clear();
      }
    }
  };
};