module.exports = (sequelize, DataTypes) => {
  const Property_Level = sequelize.define("property_level", {
    property_level_id: {
      type: DataTypes.INTEGER,
      field: "property_level_id",
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
    updated_by: {
      type: DataTypes.STRING,
      field: "updated_by",
      allowNull: false
    }
  });
  return Property_Level;
};
