import { sortRandomly, sortByComments } from '../utils/sort.js';

const PICTURES_RENDER_COUNT = 10;
const PhotoFilterSettings = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const imgFilters = document.querySelector('.img-filters');

const filterPhotos = (photos, filterType) => {
  const sortedPhotos = photos.slice();
  switch (filterType) {
    case PhotoFilterSettings.RANDOM:
      return sortedPhotos.sort(sortRandomly).slice(0, PICTURES_RENDER_COUNT);
    case PhotoFilterSettings.DISCUSSED:
      return sortedPhotos.sort(sortByComments);
    default:
      return sortedPhotos;
  }
};

const setupFilters = (photos, cb) => {
  const filterButtons = Object.keys(PhotoFilterSettings).map((key) =>
    document.getElementById(PhotoFilterSettings[key])
  );

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
      const activeButton = imgFilters.querySelector('.img-filters__button--active');
      if (activeButton) {
        activeButton.classList.remove('img-filters__button--active');
      }
      filterButton.classList.add('img-filters__button--active');
      cb(filterPhotos(photos, filterButton.id));
    });
  });

  cb(filterPhotos(photos, PhotoFilterSettings.DEFAULT));

  imgFilters.classList.remove('img-filters--inactive');
};

export { setupFilters, filterPhotos };
