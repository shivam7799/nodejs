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
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.contractors = require("./contractor.model.js")(sequelize, Sequelize);
db.backend_users = require("./backend_user.model.js")(sequelize, Sequelize);
db.property_owners = require("./property_owner.model.js")(sequelize, Sequelize);
db.property_types = require("./property_type.model.js")(sequelize, Sequelize);
db.property_sub_types = require("./property_sub_type.model.js")(
  sequelize,
  Sequelize
);
db.countries = require("./country.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);

db.users.hasMany(db.contractors, {
  as: "contractors",
  foreignKey: "fk_user_id"
});
db.contractors.belongsTo(db.users, {
  foreignKey: "fk_user_id"
});
db.users.hasMany(db.contractors, {
  foreignKey: "created_by"
});
db.contractors.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.contractors, {
  foreignKey: "updated_by"
});
db.contractors.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.users.hasMany(db.backend_users, {
  as: "backend_users",
  foreignKey: "fk_user_id"
});
db.backend_users.belongsTo(db.users, {
  foreignKey: "fk_user_id"
});
db.users.hasMany(db.backend_users, {
  foreignKey: "created_by"
});
db.backend_users.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.backend_users, {
  foreignKey: "updated_by"
});
db.backend_users.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.users.hasMany(db.property_owners, {
  as: "property_owners",
  foreignKey: "fk_user_id"
});
db.property_owners.belongsTo(db.users, {
  foreignKey: "fk_user_id"
});
db.users.hasMany(db.property_owners, {
  foreignKey: "created_by"
});
db.property_owners.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.property_owners, {
  foreignKey: "updated_by"
});
db.property_owners.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.countries.hasMany(db.states, {
  as: "states",
  foreignKey: "fk_country_id"
});
db.states.belongsTo(db.countries, {
  foreignKey: "fk_country_id"
});
db.users.hasMany(db.states, {
  foreignKey: "created_by"
});
db.states.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.states, {
  foreignKey: "updated_by"
});
db.states.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.users.hasMany(db.countries, {
  foreignKey: "created_by"
});
db.countries.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.countries, {
  foreignKey: "updated_by"
});
db.countries.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.users.hasMany(db.property_types, {
  foreignKey: "created_by"
});
db.property_types.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.property_types, {
  foreignKey: "updated_by"
});
db.property_types.belongsTo(db.users, {
  foreignKey: "updated_by"
});

db.property_types.hasMany(db.property_sub_types, {
  as: "property_sub_types",
  foreignKey: "fk_property_type_id"
});
db.property_sub_types.belongsTo(db.property_types, {
  foreignKey: "fk_property_type_id"
});
db.users.hasMany(db.property_sub_types, {
  foreignKey: "created_by"
});
db.property_sub_types.belongsTo(db.users, {
  foreignKey: "created_by"
});
db.users.hasMany(db.property_sub_types, {
  foreignKey: "updated_by"
});
db.property_sub_types.belongsTo(db.users, {
  foreignKey: "updated_by"
});

module.exports = db;
