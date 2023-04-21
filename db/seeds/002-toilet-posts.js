/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('toilet_posts').del();
  await knex('toilet_posts').insert([
    {
      rating: 1,
      comment: "Maybe it hasn't been cleaned in a long time",
      location_id: 13,
      paper: "No",
      free: "Yes",
      image_url: "http://res.cloudinary.com/dhavpujjp/image/upload/v1682117458/posts/uikhheq1m0pa99vtxknj.png"
    },
    {
      rating: 3,
      comment: "Clean toilets in the shopping center",
      location_id: 14,
      paper: "Yes",
      free: "Yes",
      image_url:"http://res.cloudinary.com/dhavpujjp/image/upload/v1682117643/posts/ng9rdat37mrvswfsljzf.png"
    },
    {
      rating: 2,
      comment: "Toilets are on the second floor of McDonald's. no change needed",
      location_id: 15,
      paper: "Yes",
      free: "Yes",
      image_url: "http://res.cloudinary.com/dhavpujjp/image/upload/v1682117643/posts/ng9rdat37mrvswfsljzf.png"
    },
    {
      rating: 2,
      comment: "You have to pay 50 cents.",
      location_id: 16,
      paper: "Yes",
      free: "No",
      image_url: "http://res.cloudinary.com/dhavpujjp/image/upload/v1682117184/posts/jkcf9z83toyq6bzvgfr1.jpg"
    },
  ]);
};
