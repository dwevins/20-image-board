'use strict';
const Photo = use('App/Model/Photo');

class PhotosController {
  * index(req, res) {
    const photos = yield Photo.all();
    yield res.sendView('photos', { photos: photos.toJSON() });
  }

  * new(req, res) {
    // Get user input
    const input = req.all();

    res.send(input);
  }
}

module.exports = PhotosController;
