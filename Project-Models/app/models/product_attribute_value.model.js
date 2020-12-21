module.exports = (sequelize, DataTypes) => {
  const Product_Attribute_Value = sequelize.define("product_attribute_value", {
    product_attribute_value_id: {
      type: DataTypes.INTEGER,
      field: "product_attribute_value_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
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
  return Product_Attribute_Value;
};
