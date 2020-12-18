const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.backend_users = require("./backend_user.model.js")(sequelize, Sequelize);
db.property_owners = require("./property_owner.model.js")(sequelize, Sequelize);
db.contractors = require("./contractor.model.js")(sequelize, Sequelize);
db.property_types = require("./property_type.model.js")(sequelize, Sequelize);
db.property_sub_types = require("./property_sub_type.model.js")(
  sequelize,
  Sequelize
);
db.property_units = require("./property_unit.model.js")(sequelize, Sequelize);
db.property_levels = require("./property_level.model.js")(sequelize, Sequelize);
db.property_addresses = require("./property_address.model.js")(
  sequelize,
  Sequelize
);
db.countries = require("./country.model.js")(sequelize, Sequelize);
db.states = require("./state.model.js")(sequelize, Sequelize);
db.cities = require("./city.model.js")(sequelize, Sequelize);

db.property_owners.hasMany(db.property_addresses, {
  as: "property_addresses",
  foreignKey: "property_owner_id"
});
db.property_addresses.belongsTo(db.property_owners, {
  foreignKey: "property_owner_id"
});
db.property_sub_types.hasMany(db.property_addresses, {
  as: "property_addresses",
  foreignKey: "property_sub_type_id"
});
db.property_addresses.belongsTo(db.property_sub_types, {
  foreignKey: "property_sub_type_id"
});
db.countries.hasMany(db.property_addresses, {
  as: "property_addresses",
  foreignKey: "country_id"
});
db.property_addresses.belongsTo(db.countries, { foreignKey: "country_id" });
db.states.hasMany(db.property_addresses, {
  as: "property_addresses",
  foreignKey: "state_id"
});
db.property_addresses.belongsTo(db.states, { foreignKey: "state_id" });
db.cities.hasMany(db.property_addresses, {
  as: "property_addresses",
  foreignKey: "city_id"
});
db.property_addresses.belongsTo(db.cities, { foreignKey: "city_id" });

db.property_types.hasMany(db.property_sub_types, {
  as: "property_sub_types",
  foreignKey: "property_type_id"
});
db.property_sub_types.belongsTo(db.property_types, {
  foreignKey: "property_type_id"
});

db.users.hasMany(db.contractors, { as: "contractors", foreignKey: "user_id" });
db.contractors.belongsTo(db.users, { foreignKey: "user_id" });

db.users.hasMany(db.backend_users, {
  as: "backend_users",
  foreignKey: "user_id"
});
db.backend_users.belongsTo(db.users, { foreignKey: "user_id" });

db.users.hasMany(db.property_owners, {
  as: "property_owners",
  foreignKey: "user_id"
});
db.property_owners.belongsTo(db.users, { foreignKey: "user_id" });

module.exports = db;
