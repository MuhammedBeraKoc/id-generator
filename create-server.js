const express = require('express')
const app = express()
const { generateId, isValidId } = require('./functions')

module.exports = () => {
    app.set('view engine', 'ejs')

    app.use(
        express.urlencoded({
            extended: false,
        })
    )

    app.use('/public', express.static('public'))

    Object.defineProperty(String.prototype, 'code', {
        get: function () {
            return this.charCodeAt(0)
        },
    })

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/id', (req, res) => {
        const limit = req.query.limit
        res.json({
            id: generateId(limit),
        })
    })

    app.post('/valid', (req, res) => {
        const id = req.query.id
        isValidId(id)
        res.json({
            isValidId: isValidId(id),
        })
    })

    app.get('/docs', (req, res) => {
        res.render('docs')
    })

    return app
}
