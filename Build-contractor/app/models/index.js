const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
          },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.contractors = require("./contractor.model.js")(sequelize,Sequelize);
// db.users = require("./user.model.js")(sequelize,Sequelize);

// db.contractors.hasOne(db.users, {as: "users"});
// db.users.belongsTo(db.contractors, {
//     foreignKey: "contractor_id",
//     as: "contractor",
// });

module.exports = db;

