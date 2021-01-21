const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const next = require('next')
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const commonApi = require('./route/common-api')
const loginApi = require('./route/login-api')
const passport = require('passport')

require('dotenv').config({ path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '.prod.env' : '.dev.env') })


app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.json())
    server.use(express.static(__dirname + '/../../public'));
    server.use(cookieParser(process.env.COOKIE_SECRET))
    server.use(session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
        }
    }))

    server.get('/_next/*', (req, res) => {
        handle(req, res);
    })

    server.get('/static/*', (req, res) => {
        handle(req, res);
    })
    
    server.get('/',(req, res) => {
        const page = '/index'
        return app.render(req, res, page)
    })

    server.use(passport.initialize())
    server.use(passport.session())
    require('./passport').config(passport)

    server.use('/api', commonApi)
    server.use('/login-api', loginApi)

    const authCheck = (req, res, next) => {
        if (req.isAuthenticated()) return next()
        res.redirect('/loginPage')
    }

    server.get('/translate', authCheck, (req, res) => {
        const page = '/translate/translate'
        return app.render(req, res, page)
    })

    server.get('/loginPage', (req, res) => {
        const page = '/login/login'
        return app.render(req, res, page)
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
