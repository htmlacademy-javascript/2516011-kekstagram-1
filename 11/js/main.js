import { renderGallery } from './services/gallery.js';
import { getData } from './data/api.js';
import { setupFilters } from './services/filters.js';
import { showError } from './utils/error-messages.js';
import { setOnSubmit, openEditor } from './services/editor/editor-loader.js';
import { debounce } from './utils/optimization.js';
import { addImageLoadListener } from './services/editor/image-loader.js';

const fileInput = document.getElementById('upload-file');

getData()
  .then((photos) => {
    const debouncedRenderGallery = debounce(renderGallery);
    setupFilters(photos, debouncedRenderGallery);
    addImageLoadListener(fileInput, openEditor);
  })
  .catch((err) => {
    showError(err.message);
  });

setOnSubmit();
