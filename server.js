const express = require('express')
const next = require('next')
const axios = require('axios')
const path = require('path')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
const commonApi = require('./route/common-api')
require('dotenv').config({ path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env') })

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(express.static(path.join(__dirname, '/public')))
    server.use('/api', commonApi)

    server.get('/', (req, res) => {
        const page = '/index'
        return app.render(req, res, page, { title: 'next' })
    })

    server.get('/translate', (req, res) => {
        const page = '/translate/translate'
        return app.render(req, res, page)
    })

    server.get('/test', (req, res) => {
        res.send('??')
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3002, (err) => {
        if (err) throw err
        console.log(process.env.test)
        console.log('localhost 3002 listen')
    })
}).catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
})
