
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Boiled Rice', description: 'A worthy meal'},
        {recipe_name: 'Meat Burger', description: 'A worthy meal'},
        {recipe_name: 'Pizza', description: 'A worthy meal'}
      ]);
    });
};
