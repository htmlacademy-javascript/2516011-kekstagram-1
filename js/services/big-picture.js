import { isEscapeKey } from '../utils/keyboard-keys.js';
import { renderCommentsList, clearCommentsList } from './comments-list.js';

const COMMENTS_PER_PAGE = 5;
let currentCommentIndex = 0;
let comments = [];

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

const updateCommentCount = () => {
  commentCountBlock.textContent = `${Math.min(currentCommentIndex, comments.length)} из ${comments.length} комментариев`;
};

const renderComments = () => {
  clearCommentsList(socialComments);
  renderCommentsList(socialComments, comments, 0, currentCommentIndex);
  updateCommentCount();

  commentsLoader.classList.toggle('hidden', currentCommentIndex >= comments.length);
};

const onCommentsLoaderClick = () => {
  currentCommentIndex += COMMENTS_PER_PAGE;
  renderComments();
};

const updateBigPictureContent = ({ url, description, likes, comments: newComments }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = newComments.length;
  socialCaption.textContent = description;

  comments = newComments;
  currentCommentIndex = Math.min(COMMENTS_PER_PAGE, comments.length);
  renderComments();
};

const openBigPicture = (cardData) => {
  updateBigPictureContent(cardData);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  commentCountBlock.classList.remove('hidden');

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const onBigPictureCancelClick = () => closeBigPicture();

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearCommentsList(socialComments);

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureCancel.addEventListener('click', onBigPictureCancelClick);

export { openBigPicture };
