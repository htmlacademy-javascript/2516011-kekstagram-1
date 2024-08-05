import { isEscapeKey } from '../../utils/keyboard-keys.js';

const showMessage = (templateId, originalEscHandler) => {
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const messageElement = document.querySelector(`.${templateId}`);
  const button = messageElement.querySelector('button');

  const handleClickOutside = (evt) => {
    if (!messageElement.contains(evt.target.closest(`.${messageElement.className}__inner`))) {
      removeMessage(messageElement, null);
    }
  };

  const handleEscPress = (evt) => {
    if (isEscapeKey(evt)) {
      removeMessage(messageElement, originalEscHandler);
    }
  };

  function removeMessage () {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscPress);
    if (messageElement && messageElement.parentNode) {
      messageElement.parentNode.removeChild(messageElement);
    }
    if (originalEscHandler) {
      document.addEventListener('keydown', originalEscHandler);
    }
  }

  button.addEventListener('click', removeMessage);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscPress);

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
