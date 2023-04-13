/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('toilet_posts').del();
  await knex('toilet_posts').insert([
    {
      rating: 1, comment: "Maybe it hasn't been cleaned in a long time",
      location_id: 1, paper: "No", free: "Yes"
    },
    {
      rating: 3, comment: "Clean toilets in a shopping center",
      location_id: 2, paper: "Yes", free: "Yes"
    },
    {
      rating: 2, comment: "Toilets are on the second floor of McDonald's. no change needed",
      location_id: 3, paper: "Yes", free: "Yes"
    },
    {
      rating: 2, comment: "You have to pay 50 cents.",
      location_id: 4, paper: "Yes", free: "No"
    },
  ]);
};
