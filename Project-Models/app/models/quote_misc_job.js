module.exports = (sequelize, DataTypes) => {
  const Quote_Misc_Job = sequelize.define("quote_misc_job", {
    quote_misc_job_id: {
      type: DataTypes.INTEGER,
      field: "quote_misc_job_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    service_name: {
      type: DataTypes.STRING,
      field: "service_name",
      allowNull: false
    },
    quote_value: {
      type: DataTypes.INTEGER,
      field: "quote_value",
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
  return Quote_Misc_Job;
};
