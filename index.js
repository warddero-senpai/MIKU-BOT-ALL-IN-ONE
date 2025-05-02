const client = require('./main');
require('./bot');
require('./shiva');

const loadEventHandlers = () => {
    const colors = require('./UI/colors/colors');

    const logSystem = (system, status = '✅') => {
        const timestamp = new Date().toLocaleTimeString();
        console.log(
            `${colors.gray}[${timestamp}]${colors.reset}`,
            `${colors.cyan}[${system.padEnd(15)}]${colors.reset}`,
            `${colors.green}${status}${colors.reset}`
        );
    };

    console.clear();

    const currentDate = new Date().toISOString().replace('T', ' ').slice(0, 19);

    console.log('\n' + '═'.repeat(60));
    console.log(`${colors.yellow}${colors.bright}             🤖 INICIALIZACIÓN DE SISTEMAS DEL BOT 🤖${colors.reset}`);
    console.log('═'.repeat(60) + '\n');

    console.log(`\n${colors.magenta}${colors.bright}📡 SISTEMAS CENTRALES${colors.reset}`);
    console.log('─'.repeat(40));

    const ticketHandler = require('./events/ticketHandler');
    ticketHandler(client);
    logSystem('TICKET');

    const modmailHandler = require('./events/modmailHandler');
    modmailHandler(client);
    logSystem('MODMAIL');

    const voiceChannelHandler = require('./events/voiceChannelHandler');
    voiceChannelHandler(client);
    logSystem('VOICE');

    console.log(`\n${colors.magenta}${colors.bright}🎮 SISTEMAS DE INTERACCIÓN${colors.reset}`);
    console.log('─'.repeat(40));

    const giveawayHandler = require('./events/giveaway');
    giveawayHandler(client);
    logSystem('GIVEAWAY');

    const autoroleHandler = require('./events/autorole');
    autoroleHandler(client);
    logSystem('AUTOROLE');

    const reactionRoleHandler = require('./events/reactionroles');
    reactionRoleHandler(client);
    logSystem('REACTION ROLES');

    console.log(`\n${colors.magenta}${colors.bright}😀 EMOJIS Y SISTEMA AFK${colors.reset}`);
    console.log('─'.repeat(40));

    const nqnHandler = require('./events/nqn');
    nqnHandler(client);
    logSystem('NQN');

    const afkHandler = require('./events/afkHandler');
    afkHandler(client);
    logSystem('AFK');

    console.log(`\n${colors.magenta}${colors.bright}🔔 SISTEMAS DE NOTIFICACIÓN${colors.reset}`);
    console.log('─'.repeat(40));

    const startYouTubeNotifications = require('./events/youTubeHandler');
    const startTwitchNotifications = require('./events/twitchHandler');
    const startFacebookNotifications = require('./events/facebookHandler');
    const startInstagramNotifications = require('./events/instagramHandler');

    startYouTubeNotifications(client);
    logSystem('YOUTUBE');

    startTwitchNotifications(client);
    logSystem('TWITCH');

    startFacebookNotifications(client);
    logSystem('FACEBOOK');

    startInstagramNotifications(client);
    logSystem('INSTAGRAM');

    console.log(`\n${colors.magenta}${colors.bright}🎵 SISTEMA DE MÚSICA${colors.reset}`);
    console.log('─'.repeat(40));
    require('./events/music')(client);
    logSystem('LAVALINK MUSIC');

    require('./shiva');
    console.log(`\n${colors.magenta}${colors.bright}🎵 SISTEMA DISTUBE${colors.reset}`);
    require('./handlers/distube')(client);

    console.log('\n' + '═'.repeat(60));
    console.log(`${colors.green}${colors.bright}             ✨ TODOS LOS SISTEMAS INICIALIZADOS ✨${colors.reset}`);
    console.log('═'.repeat(60) + '\n');

    console.log(`${colors.green}${colors.bright}Estado: ${colors.reset}${colors.green}Todos los sistemas operativos${colors.reset}`);
    console.log(`${colors.gray}Última verificación: ${colors.reset}${colors.cyan}${new Date().toLocaleTimeString()}${colors.reset}\n`);
};

loadEventHandlers();
