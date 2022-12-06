import Sequelize from 'sequelize';
import { env_config } from '../const/global_consts.js';

export const sequelize = new Sequelize(
    env_config.DB_NAME,
    env_config.DB_USERNAME, 
    env_config.DB_PASSWORD,
    {
        host: env_config.DB_HOST,
        dialect: 'postgres'
    }
);