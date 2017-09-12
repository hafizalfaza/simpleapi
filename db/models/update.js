import {sequelize} from '../connection';
import Sequelize from 'sequelize';

import { User } from './user';


export const Update = sequelize.define('updates_sticky', {

    date: {
        type: Sequelize.DATE
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    url: {
        type: Sequelize.STRING(100)
    }

},
{
    freezeTableName: true,
    timestamps: false
})
