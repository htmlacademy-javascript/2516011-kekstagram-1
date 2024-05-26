import { PHOTO_COUNT, DESCRIPTIONS, MIN_LIKE_COUNT, MAX_LIKE_COUNT } from './constants.js';
import { getRandomInt, getRandomArrayElement } from '../utils/random.js';
import { generateComments } from './comments.js';

const generatePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: generateComments()
});

const generatePhotos = () => Array.from({ length: PHOTO_COUNT }, (_, i) => generatePhoto(i + 1));

export { generatePhoto, generatePhotos };
