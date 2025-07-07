import photos from '../data/photos.json';

const getAllPhotos = () => {
  return photos;
};

const getPhotoById = (id) => {
  return photos.find((photo) => photo.id === id);
};

export { getAllPhotos, getPhotoById };
