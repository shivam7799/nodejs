module.exports = (sequelize, DataTypes) => {
  const Contractor = sequelize.define("contractor", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      primaryKey: true,
      autoIncrement: true
    },
    // fk_user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   field: "fk_user_id",
    //   references: {
    //     model: "User",
    //     key: "id"
    //   }
    // },
    first_name: {
      type: DataTypes.STRING,
      field: "first_name",
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      field: "last_name",
      allowNull: false
    },
    mobile: {
      type: DataTypes.BIGINT,
      field: "mobile",
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      field: "company_name",
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
      field: "created_by",
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      field: "updated_by",
      allowNull: false
    }
  });
  return Contractor;
};
