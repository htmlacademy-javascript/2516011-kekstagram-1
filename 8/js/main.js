import { generatePhotos } from './data/photos.js';
import { renderGallery } from './services/gallery.js';
import './services/editor/editor-loader.js';

renderGallery(generatePhotos());
