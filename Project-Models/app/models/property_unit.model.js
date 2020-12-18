module.exports = (sequelize, DataTypes) => {
  const Property_Unit = sequelize.define("property_unit", {
    property_unit_id: {
      type: DataTypes.INTEGER,
      field: "property_unit_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
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
    modified_by: {
      type: DataTypes.STRING,
      field: "modified_by",
      allowNull: false
    }
  });
  return Property_Unit;
};
