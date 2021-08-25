import { Sequelize } from 'Sequelize'

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres"
})

const testConnection = async() => {
    try {
        sequelize.authenticate().then(() => {
            console.log('db authenticated')
        })
    } catch (error) {
        console.log(error)
    }
}

testConnection();

export default sequelize