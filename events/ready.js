const { ChalkAdvanced } = require('chalk-advanced');

module.exports = async (client) => {
    console.log(
        `${ChalkAdvanced.white('Client')} ${ChalkAdvanced.gray(
          '>',
        )} ${ChalkAdvanced.green(
          'BOT SUCCESSFULLY STARTED!',
        )}`,
    );

    client.user.setActivity('chat for c!help', { type: 'WATCHING' });
};