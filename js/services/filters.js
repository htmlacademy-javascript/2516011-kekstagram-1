import { sortRandomly, sortByComments } from '../utils/sort.js';

const PICTURES_RENDER_COUNT = 10;
const PhotoFilterSettings = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const imgFilters = document.querySelector('.img-filters');

const filterPhotos = (photos, filterType) => {
  switch (filterType) {
    case PhotoFilterSettings.RANDOM:
      return photos.slice().sort(sortRandomly).slice(0, PICTURES_RENDER_COUNT);
    case PhotoFilterSettings.DISCUSSED:
      return photos.slice().sort(sortByComments);
    default:
      return photos.slice();
  }
};

const setupFilters = (photos, cb) => {
  Object.values(PhotoFilterSettings).forEach((filter) => {
    const filterButton = document.getElementById(filter);
    filterButton.addEventListener('click', () => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      filterButton.classList.add('img-filters__button--active');
      cb(filterPhotos(photos, filter));
    });
  });

  cb(filterPhotos(photos, PhotoFilterSettings.DEFAULT));

  imgFilters.classList.remove('img-filters--inactive');
};

export { setupFilters, filterPhotos };
