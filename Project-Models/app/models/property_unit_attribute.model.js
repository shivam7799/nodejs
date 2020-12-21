module.exports = (sequelize, DataTypes) => {
  const Property_Unit_Attribute = sequelize.define("property_unit_attribute", {
    property_unit_attribute_id: {
      type: DataTypes.INTEGER,
      field: "property_unit_attribute_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    attribute_name: {
      type: DataTypes.STRING,
      field: "attribute_name",
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at"
    },
    created_by: {
      type: DataTypes.STRING,
      field: "created_by",
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING,
      field: "updated_by",
      allowNull: false
    }
  });
  return Property_Unit_Attribute;
};
