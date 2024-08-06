import { showError } from '../../utils/error-messages.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const validateFileType = (file) => new Promise((resolve, reject) => {
  const fileName = file.name.toLowerCase();
  const isValidType = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (isValidType) {
    resolve(URL.createObjectURL(file));
  } else {
    reject('Неподдерживаемый тип файла. Пожалуйста, выберите файл .jpg, .jpeg или .png.');
  }
});

const onFileInputChange = (evt, openEditor) => {
  const fileInput = evt.target;
  const file = fileInput.files[0];

  if (file) {
    validateFileType(file)
      .then((fileURL) => {
        openEditor(fileURL);
      })
      .catch((errorMessage) => {
        showError(errorMessage);
        fileInput.value = '';
      });
  }
};

const addImageLoadListener = (fileInput, openEditor) => {
  fileInput.addEventListener('change', (evt) => onFileInputChange(evt, openEditor));
};

export { addImageLoadListener };
