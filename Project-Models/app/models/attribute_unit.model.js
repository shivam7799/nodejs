module.exports = (sequelize, DataTypes) => {
  const Attribute_Unit = sequelize.define("attribute_unit", {
    attribute_unit_id: {
      type: DataTypes.INTEGER,
      field: "attribute_unit_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    unit_name: {
      type: DataTypes.STRING,
      field: "unit_name",
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
  return Attribute_Unit;
};
