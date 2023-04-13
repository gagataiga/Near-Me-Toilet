/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return knex.schema.createTable("locations",
    (table) => {
      table.increments("id").unique();
      table.double("longitude", 10, 6);
      table.double("latitude", 10, 6);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("locations")
};
