const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const PORT = process.env.PORT || 2000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.set('view engine' , 'ejs')
app.set('views', path.resolve(__dirname , './views'))

const Home = require('./controller/HomeInstagram')
const Insta1 = require('./controller/Insta1')
const Insta2 = require('./controller/Insta2')
const Insta3 = require('./controller/Insta3')
const Insta4 = require('./controller/Insta4')
const Insta5 = require('./controller/Insta5')
const notFound = require('./controller/notFound')

app.get('/', Home.GET)
app.get('/insta1', Insta1.GET1)
app.get('/insta2', Insta2.GET2)
app.get('/insta3', Insta3.GET3)
app.get('/insta4', Insta4.GET4)
app.get('/insta5', Insta5.GET5)
app.get('/:*', notFound.GETNot)


app.listen(PORT , console.log('worked'))