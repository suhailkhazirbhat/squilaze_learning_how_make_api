const {  DataTypes,Model } = require('sequelize');
const sequelize = require('./index')






// Models can be defined in two equivalent ways in Sequelize:

// Calling sequelize.define(modelName, attributes, options)
// Extending Model and calling init(attributes, options)

// [1] : Calling sequelize.define(modelName, attributes, options)
// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   tableName:"users",
// //   timestamps:false // when i have no need of createdAt and 
// // createdAt:false;// change name of createdAt
// // updatedAt:'updatedAt'
// });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports=User

// [ 2 ]  Extending Model and calling init(attributes, options)


class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
module.exports=User