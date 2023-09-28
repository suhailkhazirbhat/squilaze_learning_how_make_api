
////////////////////////////////////
    // const {  DataTypes } = require('sequelize');
// const sequelize = require('./index')

module.exports =(sequelize,DataTypes)=>{ sequelize.define('Contacts', {
    // Model attributes are defined here
    permenatAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_Adress: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  //   tableName:"users",
  //   timestamps:false // when i have no need of createdAt and 
  // createdAt:false;// change name of createdAt
  // updatedAt:'updatedAt'
  });
}