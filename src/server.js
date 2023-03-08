const Hapi = require("@hapi/hapi");

const home = require('./api/home');
const HomeService = require('./services/HomeService')

const init = async () => {
    const homeService = new HomeService();

    const server = Hapi.server({
        port: 5001,
        host: 'localhost',
        routes: {
            cors: {
                origin: ["*"],
            },
        },
    });

    await server.register([
        {
            plugin: home,
            options: {
                service: homeService
            }
        }
    ])

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();