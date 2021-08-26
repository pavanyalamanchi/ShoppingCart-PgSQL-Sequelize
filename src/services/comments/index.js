import { Router } from 'express'
import db from '../../db/models/index.js'

const Products = db.Products
    //const Categories = db.Categories
const Users = db.Users
const Comments = db.Comments

const router = Router()

router.get('/', async(req, res, next) => {
    try {
        const data = await Comments.findAll({
            include: { model: Products, include: Users }
        })
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try {
        const data = await Comments.create(req.body)
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const data = await Comments.findByPk(req.params.id)
        res.send(data)
    } catch (error) {
        res.status(500).send(error)
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const data = await Comments.update(req.body, {
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
        const rows = await Comments.destroy({ where: { id: req.params.id } })
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