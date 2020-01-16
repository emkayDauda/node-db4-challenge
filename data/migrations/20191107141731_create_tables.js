exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments("recipe_id");
      table.string("recipe_name").notNullable();
      table.string("description");
    })
    .createTable("ingredients", table => {
      table.increments("ingredient_id");

      table.string("ingredient_name").notNullable();
      table.string("description");
    })
    .createTable("measurements", table => {
      table.increments();

      table
        .integer("recipe_id")
        .notNullable()
        .references("recipe_id")
        .inTable("recipes");

      table
        .integer("ingredient_id")
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients");

      table
        .decimal("quantity")
        .unsigned()
        .notNullable();
    })
    .createTable("steps", table => {
      table.increments("step_id");

      table
        .integer("recipe_id")
        .references("recipe_id")
        .inTable("recipes");

      table
        .integer("step_number")
        .notNullable()
        .unsigned();

      table.string("instruction");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("measurements")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
