import { isEscapeKey } from '../utils/keyboard-keys.js';
import { form, pristine } from './editor-form-validation.js';

const reader = new FileReader();

const body = document.body;
const imgOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.getElementById('upload-cancel');
const fileInput = document.getElementById('upload-file');
const imgPreview = document.querySelector('.img-upload__preview img');
const hashTagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditor();
  }
};

function openEditor (evt) {
  imgPreview.src = evt.target.result;
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeEditor () {
  form.reset();
  pristine.reset();
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onLoadReader = (evt) => {
  openEditor(evt);
};

const onFileInputChange = (evt) => {
  const file = evt.target.files[0];
  if (file) {
    reader.addEventListener('load', onLoadReader);
    reader.readAsDataURL(file);
  }
};

const onCancelButtonLock = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onCancelButtonClick = () => {
  closeEditor();
};

const onSubmit = (evt) => {
  evt.preventDefault();
  const valid = pristine.validate();
  if (valid) {
    window.console.log('Форма валидна, можно отправлять данные.');
  } else {
    window.console.log('Форма не валидна, проверьте поля.');
  }
};

fileInput.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
hashTagsInput.addEventListener('keydown', onCancelButtonLock);
commentInput.addEventListener('keydown', onCancelButtonLock);
form.addEventListener('submit', onSubmit);
