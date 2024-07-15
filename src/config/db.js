const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('localdb','root','Dhiman@2000',{
//     host: 'localhost',
//     dialect: 'mysql',
// });

const sequelize = new Sequelize('db_server_kyze','db_server_kyze_user','8MJ7mSKCsPDbhgph2gblm4z462HDq0uX',{
    host: 'dpg-cq7mt4jv2p9s73c6u0og-a.oregon-postgres.render.com',
    dialect: 'postgres',
});

module.exports = sequelize;