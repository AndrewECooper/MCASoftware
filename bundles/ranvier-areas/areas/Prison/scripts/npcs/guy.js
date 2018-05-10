
'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        if (this.hasEffectType('speaking')) {
          return;
        }
        if(player.entered1Before > 0) {
         return;
        }
        const speak = state.EffectFactory.create('speak', this, {}, {
          messageList: [
            "%player%. I've been expecting you. Please listen to me. I've lost Topedus." +
            "It's very important that I get him back; I need a statue of him.  Have you found any?",
          ],
          outputFn: message => {
            message = message.replace(/%player%/, player.name);
            state.ChannelManager.get('say').send(state, this, message);
          }
        });      
        this.addEffect(speak);
        player.entered1Before = (player.entered1Before || 0) + 1;
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