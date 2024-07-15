const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('products',{
    pid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wid: {
        type: DataTypes.INTEGER,
        allowNull: false
    } 
});

module.exports = Product;