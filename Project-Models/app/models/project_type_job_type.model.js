module.exports = (sequelize, DataTypes) => {
  const Project_Type_Job_Type = sequelize.define("project_type_job_type", {
    project_type_job_type_id: {
      type: DataTypes.INTEGER,
      field: "project_type_job_type_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    job_type: {
      type: DataTypes.STRING,
      field: "job_type",
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
  return Project_Type_Job_Type;
};
