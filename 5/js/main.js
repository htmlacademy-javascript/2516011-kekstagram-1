import { generatePhotos } from './data/photos.js';
import { renderThumbnails } from './services/photoThumbnails.js';

renderThumbnails(generatePhotos());
