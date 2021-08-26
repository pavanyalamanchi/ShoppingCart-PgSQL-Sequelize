import sequelize from '../connection.js'
import datatypes from 'sequelize'

const { DataTypes } = datatypes

const Comments = sequelize.define('comment', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default Comments