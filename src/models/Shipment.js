const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Shipment = sequelize.define('shipments',{
    sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    oid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    trackingNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shipmentDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Shipment;