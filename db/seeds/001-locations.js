/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('locations').del();
  await knex('locations').insert([
    { longitude: 14.298860, latitude : 48.303120}, // Park
    { longitude: 14.28751, latitude: 48.30348 }, // Arkade shopping center
    { longitude: 14.28847, latitude: 48.30429 }, // Mcdonald's 
    { longitude: 14.29090, latitude: 48.29119 }, // Linz HBF
  ]);
};
