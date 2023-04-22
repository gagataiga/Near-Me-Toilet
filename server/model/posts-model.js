const knex = require('../../db/index');

const POSTS_TABLE = "toilet_posts";

module.exports = {
  POSTS_TABLE,
  insertPost(post) {
    return knex(POSTS_TABLE)
      .insert(post);
  },
  getAllPosts() { 
    return knex(POSTS_TABLE)
      .select("rating","comment","longitude","latitude","paper","free","image_url")
      .join("locations", "toilet_posts.location_id", "locations.id")
  }
}