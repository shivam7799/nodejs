module.exports = (sequelize, DataTypes) => {
  const Project_Proposal = sequelize.define("project_proposal", {
    project_proposal_id: {
      type: DataTypes.INTEGER,
      field: "project_proposal_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      field: "name",
      allowNull: false
    },
    project_proposal_status: {
      type: DataTypes.STRING,
      field: "project_proposal_status",
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
  return Project_Proposal;
};
