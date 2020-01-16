const express = require('express')
const db = require('../models/recipe_model')

const recipes = express.Router()

recipes.get('/', (req, res) => {
    db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({message: err.message}))
})

recipes.get('/:id', (req, res) => {
    db.getRecipes(req.params.id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({message: err.message}))
})

recipes.get('/:id/ingredients', (req, res) => {
    const { id } = req.params
    db.getShoppingList(id)
    .then(shoppingList => res.status(200).json(shoppingList))
    .catch(err => res.status(500).json({message: err.message}))
})

recipes.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    db.getInstructions(id)
    .then(instructions => res.status(200).json(instructions))
    .catch(err => res.status(500).json({message: err.message}))
})

module.exports = recipes;