module.exports = (sequelize, DataTypes) => {
  const Map_Project_Proposal_Contractor_Property_Unit_Quote = sequelize.define(
    "map_project_proposal_contractor_property_unit_quote",
    {
      map_project_proposal_contractor_property_unit_quote_id: {
        type: DataTypes.INTEGER,
        field: "map_project_proposal_contractor_property_unit_quote_id",
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
  return Map_Project_Proposal_Contractor_Property_Unit_Quote;
};
