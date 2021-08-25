import Categories from './categories.js'
import sequelize from "../connection.js"
import Products from './products.js'

Products.belongsTo(Categories)
Categories.hasMany(Products)

export default { Categories, sequelize, Products }