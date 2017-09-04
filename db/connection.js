import Sequelize from 'sequelize';
import {dbconfig} from './config';


export const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig.host);

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
    });