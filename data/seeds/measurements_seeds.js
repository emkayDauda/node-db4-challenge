
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {ingredient_id: 1, recipe_id: 1, quantity: 2.4},
        {ingredient_id: 2, recipe_id: 2, quantity: 2.4},
        {ingredient_id: 2, recipe_id: 3, quantity: 2.4}
      ]);
    });
};
