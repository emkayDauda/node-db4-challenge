const db = require('../data/dbConfig')

function getRecipes(id){
    let query =  db('recipes as r')

    if (id) {
        query.where('r.recipe_id', id)
    }

    return query
}

function getShoppingList(id){
    return db('measurements as m')
    .join('ingredients as i', 'm.ingredient_id', 'i.ingredient_id')
    .select('i.ingredient_name', 'm.quantity')
    .where('m.recipe_id', id)
}

function getInstructions(id) {
    return db('steps as s')
    .select('step_number', 'step_id', 'instruction')
    .where('recipe_id', id)
    .orderBy('step_number')
}

module.exports = { 
    getRecipes,
    getShoppingList,
    getInstructions,
}