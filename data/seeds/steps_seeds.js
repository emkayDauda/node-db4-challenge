
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, instruction: "Wash your hands, you pig!", step_number: 1},
        {recipe_id: 1, instruction: "Wash the rice, you pig!", step_number: 2},
        {recipe_id: 1, instruction: "Boil the water, you slob!", step_number: 3},
        {recipe_id: 2, instruction: "Wash your hands, you pig!", step_number: 1},
        {recipe_id: 3, instruction: "Wash your hands, you pig!", step_number: 1}
      ]);
    });
};
