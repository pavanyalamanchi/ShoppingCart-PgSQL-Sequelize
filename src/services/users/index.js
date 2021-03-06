import { Router } from 'express'
import db from '../../db/models/index.js'

const Products = db.Products
    //const Categories = db.Categories
const Comments = db.Comments
const Users = db.Users

const router = Router()

router.get('/', async(req, res, next) => {
    try {
        const data = await Users.findAll({
            include: { model: Products, include: Comments }
        })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try {
        const data = await Users.create(req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const data = await Users.findByPk(req.params.id)
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const data = await Users.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const rows = await Users.destroy({ where: { id: req.params.id } })
        if (rows > 0) {
            res.send('ok')
        } else {
            res.status(404).send('not found')
        }
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

export default router