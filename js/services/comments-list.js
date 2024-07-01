const renderCommentsList = (socialComments, comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, message, name }) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const imgElement = document.createElement('img');
    imgElement.classList.add('social__picture');
    imgElement.src = avatar;
    imgElement.alt = name;
    imgElement.width = 35;
    imgElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = message;

    commentElement.appendChild(imgElement);
    commentElement.appendChild(textElement);
    fragment.appendChild(commentElement);
  });

  socialComments.appendChild(fragment);
};

const clearCommentsList = (socialComments) => {
  socialComments.innerHTML = '';
};

export { renderCommentsList, clearCommentsList };
