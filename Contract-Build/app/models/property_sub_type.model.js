module.exports = (sequelize, DataTypes) => {
  const Property_Sub_Type = sequelize.define("property_sub_type", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      primaryKey: true,
      autoIncrement: true
    },
    fk_property_type_id: {
      type: DataTypes.INTEGER,
      field: "fk_property_type_id"
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
  return Property_Sub_Type;
};
