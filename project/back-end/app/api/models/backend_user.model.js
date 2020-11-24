module.exports = (sequelize, Sequelize) => {
    const Backend_user  = sequelize.define("backend_user", {
      // backend_user_id: {
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
  
    return Backend_user;
  };