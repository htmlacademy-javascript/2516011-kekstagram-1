import { renderGallery } from './services/gallery.js';
import { getData } from './data/api.js';
import { setupFilters } from './services/filters.js';
import { showError } from './utils/error-messages.js';
import { setOnSubmit } from './services/editor/editor-loader.js';
import { debounce } from './utils/optimization.js';

getData()
  .then((photos) => {
    const debouncedRenderGallery = debounce(renderGallery);
    setupFilters(photos, debouncedRenderGallery);
  })
  .catch(
    (err) => {
      showError(err.message);
    }
  );

setOnSubmit();
