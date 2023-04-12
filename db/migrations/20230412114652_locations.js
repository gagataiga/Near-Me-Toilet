/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("locations",
    (table) => {
    table.increments("id")
      .references("location_id")
      .inTable("toilet_posts");
      table.double("longitude", 10, 6);
      table.double("latitude", 10, 6);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
      return knex.schema.dropTable("locations")
};
