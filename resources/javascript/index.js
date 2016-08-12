'use strict';

export default function (app) {
  const button = document.querySelector('.photos-header__button');
  const form = document.querySelector('.form');
  button.addEventListener('click', () => {
    form.classList.toggle('hidden');
  });
}
