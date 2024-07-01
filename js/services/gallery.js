import { renderThumbnails } from './photo-thumbnails.js';
import { openBigPicture } from './big-picture.js';

const renderGallery = (photos) => {
  renderThumbnails(photos);

  const photosContainer = document.querySelector('.pictures');

  const onCardsClick = (evt) => {
    const photoElement = evt.target.closest('.picture');

    if (!photoElement) {
      return;
    }

    const id = parseInt(photoElement.dataset.id, 10);
    const cardData = photos.find((photo) => photo.id === id);
    if (cardData) {
      openBigPicture(cardData);
    }
  };

  photosContainer.addEventListener('click', onCardsClick);
};

export { renderGallery };
