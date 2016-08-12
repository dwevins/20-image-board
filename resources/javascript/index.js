'use strict';

export default function () {
  const button = document.querySelector('.photos-header__button');
  const form = document.querySelector('.form');
  button.addEventListener('click', () => {
    form.toggleClass('.hidden');
  });
}
