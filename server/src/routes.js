const express = require('express')
const routes = express.Router()
const Cliente = require('./controllers/InsertCliente')
const Multiplicador = require('./controllers/InsertMultiplicador')

routes.get('/clientes', async (req, res) => {
    const getClient = await Cliente.findAll()
    res.json(getClient)
})

routes.get('/multiplicadores', async (req, res) => {
    const getMultiplier = await Multiplicador.findAll()
    res.json(getMultiplier)
})

routes.post('/cadcliente', async (req, res) => {
    const { 
        nome, 
        cpf, 
        insc, 
        rua, 
        numero, 
        complemento, 
        bairro, 
        cep, 
        cidade, 
        distrito, 
        uf 
    } = req.body

    await Cliente.create({
        nome,
        cpf,
        insc,
        rua,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        distrito,
        uf
    })
    
    return res.json({
        Sucesso: 'Requisição enviada'
    })
})


routes.post('/cadmultiplicador', async (req, res) => {
    const { 
        nome, 
        cpf, 
        insc, 
        rua, 
        numero, 
        complemento, 
        bairro, 
        cep, 
        cidade, 
        distrito, 
        uf 
    } = req.body

    await Multiplicador.create({
        nome,
        cpf,
        insc,
        rua,
        numero,
        complemento,
        bairro,
        cep,
        cidade,
        distrito,
        uf
    })
    
    return res.json({
        Sucesso: 'Requisição enviada'
    })
})


module.exports = routes