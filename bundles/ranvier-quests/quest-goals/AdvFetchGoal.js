'use strict';

module.exports = srcPath => {
  const QuestGoal = require(srcPath + 'QuestGoal');

  /**
   * requires the quest to complete in a certain room
   * A quest goal requiring the player picks up a certain number of a particular item
   */
  return class AdvFetchGoal extends QuestGoal {
      constructor(quest, config, player) {
          config = Object.assign({
            title: 'Retrieve Item',
            removeItem: false,
            count: 1,
            room: null,
            item: null
          }, config);
  
    

      super(quest, config, player);     
      
       this.state = {
        count: 0
      };

      this.on('enterRoom', this._enterRoom);   
      this.on('get', this._getItem);
      this.on('drop', this._dropItem);
      this.on('decay', this._dropItem);
      this.on('start', this._checkInventory);
    

    }
    getProgress() {
      const amount = Math.min(this.config.count, this.state.count);
      const percent = (amount / this.config.count) * 100;
      const display = `${this.config.title}: [${amount}/${this.config.count}]`;
      return { percent, display };
    }

    complete() {
      if (this.state.count < this.config.count) {
        return;
      }

      const player = this.quest.player;

      if (this.state.entityReference !== this.config.room) {
        
      }



      // this fetch quest by default removes all the quest items from the player inv
      if (this.config.removeItem) {
        for (let i = 0; i < this.config.count; i++) {
          for (const [, item] of player.inventory) {
            if (item.entityReference === this.config.item) {
              this.quest.GameState.ItemManager.remove(item);
              break;
            }
          }
        }
      }

      super.complete();
    }    
// how to move a guy
//moveTo(nextRoom, onMoved = _ => _) {
  //if (this.room) {
    //this.room.emit('npcLeave', this, nextRoom);
    //this.room.removeNpc(this);
  //}

  //this.room = nextRoom;
  //nextRoom.addNpc(this);

  //onMoved();

  //nextRoom.emit('npcEnter', this);
  //this.emit('enterRoom', nextRoom);
//}

// npc.js moveTo function
// const moveRoom = state.RoomManager.getRoom(config.moveNpc.toRoom);

    _getItem(item) {
      if (item.entityReference !== this.config.item) {
        return;
      }

      this.state.count = (this.state.count || 0) + 1;

      if (this.state.count > this.config.count) {
        return;
      }

      this.emit('progress', this.getProgress());
    }

    _dropItem(item) {
      if (!this.state.count || item.entityReference !== this.config.item) {
        return;
      }

      this.state.count--;

      if (this.state.count >= this.config.count) {
        return;
      }

      this.emit('progress', this.getProgress());
    }

    _checkInventory() {
      // when the quest is first started check the player's inventory for items they need
      if (!this.player.inventory) {
        return;
      }

      for (const [uuid, item] of this.player.inventory) {
        this._getItem(item);
      }
    }
  };
};
