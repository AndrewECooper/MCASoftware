
'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        if (this.hasEffectType('speaking')) {
          return;
        }
        if (player.entered2Before > 0){
          return;
        }

        const speak = state.EffectFactory.create('speak', this, {}, {
          messageList: [
            "You! You're trying to get out! Take this stick, it may help you take out the guard up ahead. ",
             ],
          outputFn: message => {
            message = message.replace(/%player%/, player.name);
            state.ChannelManager.get('say').send(state, this, message);
          }
        });
        this.addEffect(speak);
        // make the dialogue only happen the first time (entered room Before)
        player.entered2Before = (player.entered2Before || 0) + 1;        
      },
      
      playerLeave: state => function (player) {
        const speaking = this.effects.getByType('speaking');
        if (speaking) {
          speaking.remove();
        }      
      }
    }
  };
};