module.exports = (sequelize, DataTypes) => {
  const Project_Proposal_Job_Misc = sequelize.define(
    "project_proposal_job_misc",
    {
      project_proposal_job_misc_id: {
        type: DataTypes.INTEGER,
        field: "project_proposal_job_misc_id",
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
    }
  );
  return Project_Proposal_Job_Misc;
};
