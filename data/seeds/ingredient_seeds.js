
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'water', description: "Required for everything, plus, wash your hands"},
        {ingredient_name: 'water', description: "Required for everything, plus, wash your hands"},
        {ingredient_name: 'water', description: "Required for everything, plus, wash your hands"}
      ]);
    });
};
