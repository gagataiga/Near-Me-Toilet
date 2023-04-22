const knex = require('../../db/index');

const LOCATION_TABLE = "locations";

module.exports = {
  LOCATION_TABLE,
  insertLocation(locations) {
    return knex(LOCATION_TABLE)
      .insert(locations)
      .returning('id');
  },
}