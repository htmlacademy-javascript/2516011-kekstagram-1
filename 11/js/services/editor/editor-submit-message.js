import { isEscapeKey } from '../../utils/keyboard-keys.js';

const handleClickOutside = (event, messageElement) => {
  if (!messageElement.contains(event.target.closest('.success__inner'))) {
    removeMessage(messageElement);
  }
};

const handleEscPress = (event, messageElement) => {
  if (isEscapeKey(event)) {
    removeMessage(messageElement);
  }
};

function removeMessage(messageElement, boundClickOutsideHandler, boundEscPressHandler) {
  if (messageElement && messageElement.parentNode) {
    messageElement.parentNode.removeChild(messageElement);
  }
  document.removeEventListener('click', boundClickOutsideHandler);
  document.removeEventListener('keydown', boundEscPressHandler);
}

const showMessage = (templateId) => {
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);
  document.body.appendChild(clone);

  const messageElement = document.querySelector(`.${templateId}`);
  const button = messageElement.querySelector('button');

  const boundClickOutsideHandler = (event) => handleClickOutside(event, messageElement);
  const boundEscPressHandler = (event) => handleEscPress(event, messageElement);

  button.addEventListener('click', () => removeMessage(messageElement, boundClickOutsideHandler, boundEscPressHandler));
  document.addEventListener('click', boundClickOutsideHandler);
  document.addEventListener('keydown', boundEscPressHandler);
};

const showSuccessMessage = () => {
  showMessage('success');
};

const showErrorMessage = () => {
  showMessage('error');
};

export { showSuccessMessage, showErrorMessage };
