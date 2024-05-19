const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const MAX_COMMENT_COUNT = 5;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;

const DESCRIPTIONS = [
  'Закат на пляже',
  'Горы зимой',
  'Городская улица ночь',
  'Лесная тропинка',
  'Весенний цветок',
  'Осенний парк',
  'Морской пейзаж',
  'Заброшенный дом',
  'Старый мост',
  'Туманный лес',
  'Рассвет в горах'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Иван', 'Ольга', 'Никита', 'Мария', 'Алексей', 'Анна', 'Дмитрий', 'Екатерина', 'Сергей'];

const getRandomInt = (a, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      window.console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const generateCommentId = createRandomIdFromRangeGenerator(1, PHOTO_COUNT * MAX_COMMENT_COUNT);

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)} ${Math.random() > 0.5 ? getRandomArrayElement(MESSAGES) : ''}`,
  name: getRandomArrayElement(NAMES)
});

const generateComments = () => Array.from({length: getRandomInt(MAX_COMMENT_COUNT)}, generateComment);

const generatePhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: generateComments()
});

const generatePhotos = () => Array.from({ length: PHOTO_COUNT }, (_, i) => generatePhoto(i + 1));

generatePhotos();
