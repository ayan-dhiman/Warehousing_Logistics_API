const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Notification = sequelize.define('notifications',{
    nid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    u_id: {
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
        allowNull: true
    }
});

module.exports = Notification;