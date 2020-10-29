const express = require('express')
const app = express()
const PORT = 5712

app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

Object.defineProperty(String.prototype, 'code', {
    get: function () {
        return this.charCodeAt(0)
    }
})

/**
 * Generates a random id. Uniqueness is very alike to happen.
 * An id is a random sequence of lowercase characters and digits
 * @param limit {number} A value indicating the limit for number of digits
 * @return {string}
 */
function generateId(limit= 8) {
    let id = ''
    for (let i = 0; i < limit; ++i) {
        id += Math.floor(Math.random() * 2) ? Math.floor(Math.random() * 10) : String.fromCharCode('a'.code + Math.floor(Math.random() * ('z'.code - 'a'.code)))
    }
    return id
}

/**
 * Returns true if the id complies the given rules, otherwise false.
 * @param id {String}
 * @return {boolean}
 */
function isValidId(id) {
    for (let i = 0; i < id.length; ++i) {
        if (!Number.isInteger(parseInt(id[i])) && (id[i] < 'a'.code && id[i] > 'z'.code)) return false
    }
    return true
}

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/id', ((req, res) => {
    const limit = req.query.limit
    res.json({
        id: generateId(limit)
    })
}))

app.get('/docs', (((req, res) => {
    res.sendFile(__dirname + '/assets/docs.html')
})))

app.post('/valid', ((req, res) => {
    const id = parseInt(req.query.id)
    res.json({
        isValidId: isValidId(id)
    })
}))

app.listen(PORT, () => {
    console.log('⌛ Server is running...')
})
