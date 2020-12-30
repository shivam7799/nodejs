module.exports = (sequelize, DataTypes) => {
  const Property_Type = sequelize.define("property_type", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      primaryKey: true,
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
      type: DataTypes.INTEGER,
      field: "created_by"
    },
    updated_by: {
      type: DataTypes.INTEGER,
      field: "updated_by"
    }
  });
  return Property_Type;
};
