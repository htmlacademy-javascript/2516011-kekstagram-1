import { isEscapeKey } from '../../utils/keyboard-keys.js';
import { form, pristine } from './editor-form-validation.js';
import { resetScale } from './editor-scale-control.js';
import { resetEffects } from './editor-img-effects.js';
import { sendData } from '../../data/api.js';
import { showSuccessMessage, showErrorMessage } from './editor-submit-message.js';

const body = document.body;
const imgOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.getElementById('upload-cancel');
const fileInput = document.getElementById('upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');
const hashTagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function openEditor(fileURL) {
  imgPreview.src = fileURL;
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeEditor() {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileInput.value = '';
  if (imgPreview.src.startsWith('blob:')) {
    URL.revokeObjectURL(imgPreview.src);
  }
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onCancelButtonClick = () => {
  closeEditor();
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setOnSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      blockSubmitButton();

      sendData(new FormData(form))
        .then(() => {
          closeEditor();
          showSuccessMessage(onDocumentKeydown);
        })
        .catch(() => {
          showErrorMessage(onDocumentKeydown);
        })
        .finally(() => {
          unblockSubmitButton();
        });
    }
  });
};

const onHashTagsInputKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onCommentInputKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

cancelButton.addEventListener('click', onCancelButtonClick);
hashTagsInput.addEventListener('keydown', onHashTagsInputKeydown);
commentInput.addEventListener('keydown', onCommentInputKeydown);

export { setOnSubmit, openEditor };
