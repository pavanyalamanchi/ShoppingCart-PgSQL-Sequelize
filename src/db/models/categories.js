import sequelize from '../connection.js'
import datatypes from 'sequelize'

const { DataTypes } = datatypes

const Categories = sequelize.define('category', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Categories