import { AVATAR_COUNT, MESSAGES, NAMES, PHOTO_COUNT, MAX_COMMENT_COUNT } from './constants.js';
import { getRandomInt, getRandomArrayElement, createRandomIdFromRangeGenerator } from '../utils/random.js';

const generateCommentId = createRandomIdFromRangeGenerator(1, PHOTO_COUNT * MAX_COMMENT_COUNT);

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${Math.random() > 0.5 ? getRandomArrayElement(MESSAGES) : ''}`,
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => Array.from({length: getRandomInt(MAX_COMMENT_COUNT)}, generateComment);

export { generateComment, generateComments };
