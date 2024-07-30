import { renderGallery } from './services/gallery.js';
import { getData } from './data/api.js';
import { showError } from './utils/error-messages.js';
import { setOnSubmit } from './services/editor/editor-loader.js';

getData()
  .then((wizards) => {
    renderGallery(wizards);
  })
  .catch(
    (err) => {
      showError(err.message);
    }
  );

setOnSubmit();
