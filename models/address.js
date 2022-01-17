'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({}) {
      //this.hasMany(Users)
    }
  };
  Address.init({
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};