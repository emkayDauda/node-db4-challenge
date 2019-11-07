const db = require('../data/dbConfig')

function getRecipes(){
    return db('recipes')
}

module.exports = { 
    getRecipes
}