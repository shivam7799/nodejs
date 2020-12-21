module.exports = (sequelize, DataTypes) => {
  const Product_Job_Misc_Type = sequelize.define("product_job_misc_type", {
    product_job_misc_type_id: {
      type: DataTypes.INTEGER,
      field: "product_job_misc_type_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    misc_type: {
      type: DataTypes.STRING,
      field: "misc_type",
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
  return Product_Job_Misc_Type;
};
