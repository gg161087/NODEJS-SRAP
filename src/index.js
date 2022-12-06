import app from './app.js';
import {env_config} from './const/global_consts.js';
import {sequelize} from './database/database.js';

async function main(){
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(env_config.PORT);
        console.log('Server Running http://127.0.0.1:' + env_config.PORT);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();