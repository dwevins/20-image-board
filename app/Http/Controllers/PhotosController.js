'use strict';
const Photo = use('App/Model/Photo');

class PhotosController {
  * list(req, res) {
    const { url, description } = yield req.session.all();
    yield res.sendView('photos', { url, description });
  }

  * new(req, res) {
    const { url, description } = yield req.session.all();
    const newPhoto = new Photo({ url, description });
    yield req.session.put(newPhoto);
    yield res.sendView('photos');
  }
}

module.exports = PhotosController;
