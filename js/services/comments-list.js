const COMMENT_IMAGE_SIZE = 35;

const renderCommentsList = (socialComments, comments, startIndex, count) => {
  const fragment = document.createDocumentFragment();

  comments.slice(startIndex, startIndex + count).forEach(({ avatar, message, name }) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = avatar;
    img.alt = name;
    img.width = COMMENT_IMAGE_SIZE;
    img.height = COMMENT_IMAGE_SIZE;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = message;

    comment.append(img, text);
    fragment.append(comment);
  });

  socialComments.append(fragment);
};

const clearCommentsList = (socialComments) => {
  socialComments.innerHTML = '';
};

export { renderCommentsList, clearCommentsList };
