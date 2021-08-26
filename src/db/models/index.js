import Categories from './categories.js'
import sequelize from "../connection.js"
import Products from './products.js'
import Users from './user.js'
import Comments from './comments.js'

Products.belongsTo(Categories, {
    onDelete: "cascade",
    foreignKey: { allowNull: false },
})
Categories.hasMany(Products, {
    onDelete: "cascade",
    foreignKey: { allowNull: false },
})

Products.belongsToMany(Users, { through: { model: Comments, unique: false } })
Users.belongsToMany(Products, { through: { model: Comments, unique: false } })

Products.hasMany(Comments)
Comments.belongsTo(Products)

Users.hasMany(Comments)
Comments.belongsTo(Users)

export default { Categories, sequelize, Products, Users, Comments }