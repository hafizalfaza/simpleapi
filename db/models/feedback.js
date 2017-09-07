import {sequelize} from '../connection';

import Sequelize from 'sequelize';


export const Feedback = sequelize.define('feedback', {
    nik: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    nama: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    alasan: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    updated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    detail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }},
    {
        freezeTableName: true,
        timestamps: false
    });
