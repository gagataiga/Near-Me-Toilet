
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {  
    return await knex.schema.createTable("toilet_posts", (table) => {
      table.increments("id").unique();
      table.integer("rating");
      table.string("Paper");
      table.string("comment");
      table.integer("location_id").references("id").inTable("locations");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
      return knex.schema.dropTable("toilet_posts")
};
