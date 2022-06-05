'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.hasMany(models.artikebuy, {
        as: "artikebuy",
        foreignKey: {
          name: "idProduct",
        },
      });
    }
  }
  product.init({
    title: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    year : DataTypes.DATEONLY,
    image : DataTypes.STRING,
    pdf : DataTypes.STRING,
    desc: DataTypes.TEXT,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};