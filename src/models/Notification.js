const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Notification = sequelize.define('notifications',{
    nid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notificationDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Notification;