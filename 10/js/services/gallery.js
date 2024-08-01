import { renderThumbnails } from './photo-thumbnails.js';
import { openBigPicture } from './big-picture.js';

const renderGallery = (photos) => {
  const photosContainer = document.querySelector('.pictures');

  photosContainer.querySelectorAll('.picture').forEach((photoElement) => {
    photoElement.remove();
  });

  renderThumbnails(photos);

  const onCardsClick = (evt) => {
    const photoElement = evt.target.closest('.picture');

    if (!photoElement) {
      return;
    }

    evt.preventDefault();

    const id = parseInt(photoElement.dataset.id, 10);
    const cardData = photos.find((photo) => photo.id === id);
    if (cardData) {
      openBigPicture(cardData);
    }
  };

  photosContainer.addEventListener('click', onCardsClick);
};

export { renderGallery };
