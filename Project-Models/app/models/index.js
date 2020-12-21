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
db.projects = require("./project.model.js")(sequelize, Sequelize);
db.project_types = require("./project_type.model.js")(sequelize, Sequelize);
db.project_type_job_types = require("./project_type_job_type.model.js")(
  sequelize,
  Sequelize
);
db.project_proposals = require("./project_proposal.model.js")(
  sequelize,
  Sequelize
);
db.project_proposal_contractors = require("./project_proposal_contractor.model.js")(
  sequelize,
  Sequelize
);
db.project_proposal_job_miscs = require("./project_proposal_job_misc.model.js")(
  sequelize,
  Sequelize
);
db.project_proposal_product_attribute_values = require("./project_proposal_product_attribute_value.model.js")(
  sequelize,
  Sequelize
);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.product_attributes = require("./product_attribute.model.js")(
  sequelize,
  Sequelize
);
db.product_attribute_values = require("./product_attribute_value.model.js")(
  sequelize,
  Sequelize
);
db.area_of_works = require("./area_of_work.model.js")(sequelize, Sequelize);
db.attributes = require("./attribute.model.js")(sequelize, Sequelize);
db.project_proposal_property_unit_attribute_values = require("./project_proposal_property_unit_attribute_value.model.js")(
  sequelize,
  Sequelize
);
db.property_unit_attributes = require("./property_unit_attribute.model.js")(
  sequelize,
  Sequelize
);
db.attribute_units = require("./attribute_unit.model.js")(sequelize, Sequelize);
db.job_types = require("./job_type.model.js")(sequelize, Sequelize);
db.property_subtype_level_units = require("./property_subtype_level_unit.model.js")(
  sequelize,
  Sequelize
);
db.product_job_types = require("./product_job_type.model.js")(
  sequelize,
  Sequelize
);
db.product_job_misc_types = require("./product_job_misc_type.model.js")(
  sequelize,
  Sequelize
);
db.product_property_units = require("./product_property_unit.model.js")(
  sequelize,
  Sequelize
);
db.quotes = require("./quote.model.js")(sequelize, Sequelize);
db.quote_misc_jobs = require("./quote_misc_job.js")(sequelize, Sequelize);
db.invoices = require("./invoice.model.js")(sequelize, Sequelize);
db.map_project_proposal_contractor_property_unit_quotes = require("./map_project_proposal_contractor_property_unit_quote.model.js")(
  sequelize,
  Sequelize
);

db.project_proposal_product_attribute_values.hasMany(
  db.map_project_proposal_contractor_property_unit_quotes,
  {
    as: "map_project_proposal_contractor_property_unit_quotes",
    foreignKey: "project_proposal_product_attribute_value_id"
  }
);
db.map_project_proposal_contractor_property_unit_quotes.belongsTo(
  db.project_proposal_product_attribute_values,
  {
    foreignKey: "project_proposal_product_attribute_value_id"
  }
);
db.quotes.hasMany(db.map_project_proposal_contractor_property_unit_quotes, {
  as: "map_project_proposal_contractor_property_unit_quotes",
  foreignKey: "quote_id"
});
db.map_project_proposal_contractor_property_unit_quotes.belongsTo(db.quotes, {
  foreignKey: "quote_id"
});

db.quotes.hasMany(db.invoices, {
  as: "invoices",
  foreignKey: "quote_id"
});
db.invoices.belongsTo(db.quotes, {
  foreignKey: "quote_id"
});

db.quotes.hasMany(db.quote_misc_jobs, {
  as: "quote_misc_jobs",
  foreignKey: "quote_id"
});
db.quote_misc_jobs.belongsTo(db.quotes, {
  foreignKey: "quote_id"
});

db.project_proposals.hasMany(db.quotes, {
  as: "quotes",
  foreignKey: "project_proposal_id"
});
db.quotes.belongsTo(db.project_proposals, {
  foreignKey: "project_proposal_id"
});
db.contractors.hasMany(db.quotes, {
  as: "quotes",
  foreignKey: "contractor_id"
});
db.quotes.belongsTo(db.contractors, {
  foreignKey: "contractor_id"
});

db.products.hasMany(db.product_property_units, {
  as: "product_property_units",
  foreignKey: "product_id"
});
db.product_property_units.belongsTo(db.products, {
  foreignKey: "product_id"
});
db.property_units.hasMany(db.product_property_units, {
  as: "product_property_units",
  foreignKey: "property_unit_id"
});
db.product_property_units.belongsTo(db.property_units, {
  foreignKey: "property_unit_id"
});

db.products.hasMany(db.product_job_misc_types, {
  as: "product_job_misc_types",
  foreignKey: "product_id"
});
db.product_job_misc_types.belongsTo(db.products, {
  foreignKey: "product_id"
});

db.products.hasMany(db.product_job_types, {
  as: "product_job_types",
  foreignKey: "product_id"
});
db.product_job_types.belongsTo(db.products, {
  foreignKey: "product_id"
});
db.job_types.hasMany(db.product_job_types, {
  as: "product_job_types",
  foreignKey: "job_type_id"
});
db.product_job_types.belongsTo(db.job_types, {
  foreignKey: "job_type_id"
});

db.property_sub_types.hasMany(db.property_subtype_level_units, {
  as: "property_subtype_level_units",
  foreignKey: "property_sub_type_id"
});
db.property_subtype_level_units.belongsTo(db.property_sub_types, {
  foreignKey: "property_sub_type_id"
});
db.property_levels.hasMany(db.property_subtype_level_units, {
  as: "property_subtype_level_units",
  foreignKey: "property_level_id"
});
db.property_subtype_level_units.belongsTo(db.property_levels, {
  foreignKey: "property_level_id"
});
db.property_units.hasMany(db.property_subtype_level_units, {
  as: "property_subtype_level_units",
  foreignKey: "property_unit_id"
});
db.property_subtype_level_units.belongsTo(db.property_units, {
  foreignKey: "property_unit_id"
});

db.property_units.hasMany(db.property_unit_attributes, {
  as: "property_unit_attributes",
  foreignKey: "property_unit_id"
});
db.property_unit_attributes.belongsTo(db.property_units, {
  foreignKey: "property_unit_id"
});
db.attributes.hasMany(db.property_unit_attributes, {
  as: "property_unit_attributes",
  foreignKey: "attribute_id"
});
db.property_unit_attributes.belongsTo(db.attributes, {
  foreignKey: "attribute_id"
});
db.attribute_units.hasMany(db.property_unit_attributes, {
  as: "property_unit_attributes",
  foreignKey: "attribute_unit_id"
});
db.property_unit_attributes.belongsTo(db.attribute_units, {
  foreignKey: "attribute_unit_id"
});

db.project_proposals.hasMany(
  db.project_proposal_property_unit_attribute_values,
  {
    as: "project_proposal_property_unit_attribute_values",
    foreignKey: "project_proposal_id"
  }
);
db.project_proposal_property_unit_attribute_values.belongsTo(
  db.project_proposals,
  {
    foreignKey: "project_proposal_id"
  }
);
db.area_of_works.hasMany(db.project_proposal_property_unit_attribute_values, {
  as: "project_proposal_property_unit_attribute_values",
  foreignKey: "area_of_work_id"
});
db.project_proposal_property_unit_attribute_values.belongsTo(db.area_of_works, {
  foreignKey: "area_of_work_id"
});
db.property_unit_attributes.hasMany(
  db.project_proposal_property_unit_attribute_values,
  {
    as: "project_proposal_property_unit_attribute_values",
    foreignKey: "property_unit_attribute_id"
  }
);
db.project_proposal_property_unit_attribute_values.belongsTo(
  db.property_unit_attributes,
  {
    foreignKey: "property_unit_attribute_id"
  }
);

db.area_of_works.hasMany(db.project_proposal_product_attribute_values, {
  as: "project_proposal_product_attribute_values",
  foreignKey: "area_of_work_id"
});
db.project_proposal_product_attribute_values.belongsTo(db.area_of_works, {
  foreignKey: "area_of_work_id"
});
db.project_proposals.hasMany(db.project_proposal_product_attribute_values, {
  as: "project_proposal_product_attribute_values",
  foreignKey: "project_proposal_id"
});
db.project_proposal_product_attribute_values.belongsTo(db.project_proposals, {
  foreignKey: "project_proposal_id"
});
db.product_attributes.hasMany(db.project_proposal_product_attribute_values, {
  as: "project_proposal_product_attribute_values",
  foreignKey: "product_attribute_id"
});
db.project_proposal_product_attribute_values.belongsTo(db.product_attributes, {
  foreignKey: "product_attribute_id"
});
db.product_attribute_values.hasMany(
  db.project_proposal_product_attribute_values,
  {
    as: "project_proposal_product_attribute_values",
    foreignKey: "product_attribute_value_id"
  }
);
db.project_proposal_product_attribute_values.belongsTo(
  db.product_attribute_values,
  {
    foreignKey: "product_attribute_value_id"
  }
);

db.attributes.hasMany(db.product_attributes, {
  as: "product_attributes",
  foreignKey: "attribute_id"
});
db.product_attributes.belongsTo(db.attributes, {
  foreignKey: "attribute_id"
});
db.products.hasMany(db.product_attributes, {
  as: "product_attributes",
  foreignKey: "product_id"
});
db.product_attributes.belongsTo(db.products, {
  foreignKey: "product_id"
});

db.product_attributes.hasMany(db.product_attribute_values, {
  as: "product_attribute_values",
  foreignKey: "product_attribute_id"
});
db.product_attribute_values.belongsTo(db.product_attributes, {
  foreignKey: "product_attribute_id"
});

db.project_type_job_types.hasMany(db.area_of_works, {
  as: "area_of_works",
  foreignKey: "project_type_job_type_id"
});
db.area_of_works.belongsTo(db.project_type_job_types, {
  foreignKey: "project_type_job_type_id"
});

db.product_attributes.hasMany(db.project_proposal_job_miscs, {
  as: "project_proposal_job_miscs",
  foreignKey: "product_attribute_id"
});
db.project_proposal_job_miscs.belongsTo(db.product_attributes, {
  foreignKey: "product_attribute_id"
});
db.product_attribute_values.hasMany(db.project_proposal_job_miscs, {
  as: "project_proposal_job_miscs",
  foreignKey: "product_attribute_value_id"
});
db.project_proposal_job_miscs.belongsTo(db.product_attribute_values, {
  foreignKey: "product_attribute_value_id"
});

db.project_types.hasMany(db.project_type_job_types, {
  as: "project_types",
  foreignKey: "project_type_id"
});
db.project_type_job_types.belongsTo(db.project_types, {
  foreignKey: "project_type_id"
});

db.property_addresses.hasMany(db.projects, {
  as: "projects",
  foreignKey: "property_address_id"
});
db.projects.belongsTo(db.property_addresses, {
  foreignKey: "property_address_id"
});

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
