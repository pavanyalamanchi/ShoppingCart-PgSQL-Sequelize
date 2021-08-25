import sequelize from '../connection.js'
import datatypes from 'sequelize'

const { DataTypes } = datatypes

const Products = sequelize.define('product', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // categoryId: {
    //     type: DataTypes.INTEGER
    // },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }

})

export default Products