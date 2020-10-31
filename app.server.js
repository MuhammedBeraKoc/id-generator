const createServer = require('./create-server')
const app = createServer()

app.listen(5712, () => {
    console.log('⌛ Server is running...')
})
