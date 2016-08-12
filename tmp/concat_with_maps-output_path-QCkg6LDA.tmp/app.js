define('index', ['exports', 'module'], function (exports, module) {
  'use strict';

  module.exports = function (app) {
    var button = document.querySelector('.photos-header__button');
    var form = document.querySelector('.form');
    button.addEventListener('click', function () {
      form.classList.toggle('hidden');
    });
  };
});//# sourceMappingURL=app.map