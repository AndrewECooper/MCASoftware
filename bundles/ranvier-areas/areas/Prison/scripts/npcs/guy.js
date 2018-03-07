
'use strict';

module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');

  return  {
    listeners: {
      playerEnter: state => function (player) {
        if (this.hasEffectType('speaking')) {
          return;
        }

        const speak = state.EffectFactory.create('speak', this, {}, {
          messageList: [
            "%player%. I've been expecting you. Please listen to me. I've lost Topedus.",
            "You know who that is, right? He's my mouse.",
          ],
          outputFn: message => {
            message = message.replace(/%player%/, player.name);
            state.ChannelManager.get('say').send(state, this, message);
          }
        });
        this.addEffect(speak);
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