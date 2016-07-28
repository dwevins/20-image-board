'use strict';

const Lucid = use('Lucid');

class Photo extends Lucid {

  apiTokens() {
    return this.hasMany('App/Model/Token');
  }
}

module.exports = Photo;
