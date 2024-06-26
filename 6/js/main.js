import { generatePhotos } from './data/photos.js';
import { renderGallery } from './services/gallery.js';

renderGallery(generatePhotos());
