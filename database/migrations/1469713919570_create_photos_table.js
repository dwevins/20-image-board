'use strict';

const Schema = use('Schema');

class CreatePhotosTableSchema extends Schema {

  up() {
    this.create('photos', (table) => {
      table.increments();
      table.timestamps();
      table.string('url', 254);
      table.text('caption', 254);
    });
  }

  down() {
    this.drop('photos');
  }

}

module.exports = CreatePhotosTableSchema;
