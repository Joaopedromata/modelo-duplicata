const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Multiplicador = sequelize.define('multiplicadores', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf:{
        type: Sequelize.STRING(18),
        allowNull: false
    },
    insc:{
        type: Sequelize.STRING
    },
    rua:{
        type: Sequelize.STRING
    },
    numero:{
        type: Sequelize.INTEGER,
        
    },
    complemento:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    distrito:{
        type: Sequelize.STRING
    },
    uf:{
        type: Sequelize.STRING(2)
    }
})

module.exports = Multiplicador