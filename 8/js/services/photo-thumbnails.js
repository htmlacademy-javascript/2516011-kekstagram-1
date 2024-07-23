const photoTemplate = document.querySelector('#picture');
const photoElement = photoTemplate.content.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');

const createPhotoElement = ({id, url, description, likes, comments}) => {
  const newPhotoElement = photoElement.cloneNode(true);

  const imgElement = newPhotoElement.querySelector('.picture__img');
  const likesElement = newPhotoElement.querySelector('.picture__likes');
  const commentsElement = newPhotoElement.querySelector('.picture__comments');

  newPhotoElement.dataset.id = id;
  imgElement.src = url;
  imgElement.alt = description;
  likesElement.textContent = likes;
  commentsElement.textContent = comments.length;

  return newPhotoElement;
};

const renderThumbnails = (photosData) => {
  const fragment = document.createDocumentFragment();

  photosData.forEach((photoData) => {
    const newPhotoElement = createPhotoElement(photoData);
    fragment.append(newPhotoElement);
  });

  photosContainer.append(fragment);
};

export { renderThumbnails };
