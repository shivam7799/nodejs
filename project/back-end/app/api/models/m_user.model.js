module.exports = (sequelize, Sequelize) => {
    const M_user  = sequelize.define("m_user", {
      // m_user_id: {
      //   type: Sequelize.INTEGER,
      //   // allowNull: false,
      //   // primaryKey: true,
      //   // autoIncrement: true
      // },
      m_first_name: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      m_last_name: {
        type: Sequelize.STRING,
        // allowNull: false
      }
    });
  
    return M_user;
  };