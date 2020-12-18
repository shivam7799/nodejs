module.exports = (sequelize, DataTypes) => {
  const Property_Sub_Type = sequelize.define("property_sub_type", {
    property_sub_type_id: {
      type: DataTypes.INTEGER,
      field: "property_sub_type_id",
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
  return Property_Sub_Type;
};
