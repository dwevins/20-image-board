'use strict';
const Photo = use('App/Model/Photo');

class PhotosController {
  * index(req, res) {
    const photos = yield Photo.all();
    yield res.sendView('photos', { photos: photos.toJSON() });
  }

  * new(req, res) {
    // Get user input
    const { url, caption } = req.all();
    yield Photo.create({ url, caption });
    res.redirect('back');
  }
}

module.exports = PhotosController;
