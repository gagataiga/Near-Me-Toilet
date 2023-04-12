const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("toilet_posts", (table) => {
    table.increments("id");
    table.number("rating");
    table.string("Paper");
    table.string("comment");
    table.increments("location_id")
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable("toilet_posts")
};
