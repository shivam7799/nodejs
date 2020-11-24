module.exports = (sequelize, Sequelize) => {
    const Contractor  = sequelize.define("contractor", {
      // contractor_id: {
      //   type: Sequelize.INTEGER,
      //   // allowNull: false,
      //   // primaryKey: true,
      //   // autoIncrement: true
      // },
    //   m_user_id: {
    //       type: Sequelize.INTEGER,
    //       foreignKey: true
    //   }
    });
  
    return Contractor;
  };