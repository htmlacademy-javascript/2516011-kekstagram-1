import { renderThumbnails } from './photo-thumbnails.js';
import { openBigPicture } from './big-picture.js';

const renderGallery = (photos) => {
  renderThumbnails(photos);

  const photoElements = document.querySelectorAll('.picture');
  photoElements.forEach((photoElement, index) => {
    photoElement.addEventListener('click', () => {
      openBigPicture(photos[index]);
    });
  });
};

export { renderGallery };
