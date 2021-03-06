const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(routes)

const PORT = 3333

app.listen(PORT, () => {
    console.log("Servidor rodando")
})