import { showError } from '../../utils/error-messages.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const validateFileType = (file) => new Promise((resolve, reject) => {
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    resolve(URL.createObjectURL(file));
  } else {
    reject(new Error('Неподдерживаемый тип файла. Пожалуйста, выберите файл .jpg, .jpeg или .png.'));
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
      .catch((error) => {
        showError(error.message);
        fileInput.value = '';
      });
  }
};

const addImageLoadListener = (fileInput, openEditor) => {
  fileInput.addEventListener('change', (evt) => onFileInputChange(evt, openEditor));
};

export { addImageLoadListener };
