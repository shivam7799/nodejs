module.exports = (sequelize, Sequelize) => {
    const Property_owner  = sequelize.define("property_owner", {
      // property_owner_id: {
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
  
    return Property_owner;
  };