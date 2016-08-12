'use strict';

const Schema = use('Schema');

class CreatePhotosTableSchema extends Schema {

  up() {
    this.create('photos', (table) => {
      table.increments('id');
      table.string('url', 254);
      table.text('caption', 254);
      table.timestamps();
    });
  }

  down() {
    this.drop('photos');
  }

}

module.exports = CreatePhotosTableSchema;
