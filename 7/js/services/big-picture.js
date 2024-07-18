import { isEscapeKey } from '../utils/keyboard-keys.js';
import { renderCommentsList, clearCommentsList } from './comments-list.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('#picture-cancel');
const commentCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const updateBigPictureContent = ({ url, description, likes, comments }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;

  renderCommentsList(socialComments, comments);
};

function openBigPicture (cardData) {
  updateBigPictureContent(cardData);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  commentCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearCommentsList(socialComments);

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCancel.addEventListener('click', () => {
  closeBigPicture();
});

export { openBigPicture };
