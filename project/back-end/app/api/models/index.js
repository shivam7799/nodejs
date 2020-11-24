const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.m_user = require("./m_user.model.js")(sequelize, Sequelize);
db.contractor = require("./contractor.model.js")(sequelize, Sequelize);
db.property_owner = require("./property_owner.model.js")(sequelize, Sequelize);
db.backend_user = require("./backend_user.model.js")(sequelize, Sequelize);


module.exports = db;
// const dbConfig = require('../config/db.config')

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     operatorsAliases: false,
//     pool:{
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.m_user = require("./m_user.model")(Sequelize,sequelize);
// db.contractor = require("./contractor.model")(Sequelize,sequelize);
// db.property_owner = require("./property_owner.model")(Sequelize,sequelize);
// db.backend_user = require("./backend_user.model")(Sequelize,sequelize);

// module.exports = db;