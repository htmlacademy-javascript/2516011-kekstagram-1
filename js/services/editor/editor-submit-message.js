import { isEscapeKey } from '../../utils/keyboard-keys.js';

const showMessage = (templateId, originalEscHandler) => {
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const message = document.querySelector(`.${templateId}`);
  const acceptButton = message.querySelector('button');

  const onOutsideClick = (evt) => {
    if (!message.contains(evt.target.closest(`.${message.className}__inner`))) {
      removeMessage();
    }
  };

  const onEscPress = (evt) => {
    if (isEscapeKey(evt)) {
      removeMessage();
    }
  };

  const onAcceptButtonClick = () => {
    removeMessage();
  };

  function removeMessage () {
    document.removeEventListener('click', onOutsideClick);
    document.removeEventListener('keydown', onEscPress);
    if (message) {
      message.remove();
    }
    if (originalEscHandler) {
      document.addEventListener('keydown', originalEscHandler);
    }
  }

  acceptButton.addEventListener('click', onAcceptButtonClick);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onEscPress);

  if (originalEscHandler) {
    document.removeEventListener('keydown', originalEscHandler);
  }
};

const showSuccessMessage = (originalEscHandler) => {
  showMessage('success', originalEscHandler);
};

const showErrorMessage = (originalEscHandler) => {
  showMessage('error', originalEscHandler);
};

export { showSuccessMessage, showErrorMessage };
