
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
            "\n*Squeak* \n" + 
            "*Squeak squeak* \n" + 
            "Translation: Greetings, %player%, I am Miruk, the High Priest of Topedus. The Master, Topedus, thirsts for blood. Kill 5 guards and bring forth idols as a proper offering to Master Topedus. Otherwise, we'll use your blood for the sacrifice."
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