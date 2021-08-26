import express from 'express'
import cors from 'cors'
import categoryRouter from './services/categories/index.js'
import productRouter from './services/products/index.js'
import userRouter from './services/users/index.js'
import commentRouter from './services/comments/index.js'
import db from './db/models/index.js'

const app = express()

const port = process.env.PORT || 5001

app.use(cors())

app.use(express.json())
app.use('/categories', categoryRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/comments', commentRouter)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server running on ${port}`)
    })
})