'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        Broadcast.sayAt(player);
        Broadcast.sayAt(player, `<b>You can smell the sea as you climb into the boat and work the sails.  <White> You escaped the prison, well done.  Now you sail into the open sea with no destination, you are free.</white> You now return to the start of the game.</b>`, 80);
      }
    }

  };

};
// player moveTo starting area (info in playerevents.js "killed")
return {

}
killed: state => function (killer) {

  this.setAttributeToMax('health');

  let home = state.RoomManager.getRoom(this.getMeta('waypoint.home'));
  if (!home) {
    home = state.RoomManager.startingRoom;
  }

  this.moveTo(home, _ => {
    state.CommandManager.get('look').execute(null, this);
  });
}
