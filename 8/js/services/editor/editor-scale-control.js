const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

let currentScale = DEFAULT_SCALE;

const updateScale = (newScale) => {
  currentScale = newScale;
  imgUploadPreview.style.transform = `scale(${currentScale / 100})`;
  scaleControlValue.value = `${currentScale}%`;
};

const resetScale = () => updateScale(DEFAULT_SCALE);

const onSmallerControlClick = () => {
  if (currentScale > MIN_SCALE) {
    updateScale(currentScale - SCALE_STEP);
  }
};

const onBiggerControlClick = () => {
  if (currentScale < MAX_SCALE) {
    updateScale(currentScale + SCALE_STEP);
  }
};

scaleControlSmaller.addEventListener('click', onSmallerControlClick);
scaleControlBigger.addEventListener('click', onBiggerControlClick);

export { resetScale };
