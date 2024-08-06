const effectsButtons = document.querySelector('.effects');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');

const EFFECTS = {
  'none': { class: 'effects__preview--none', filter: '', unit: '', min: 0, max: 100, step: 1 },
  'chrome': { class: 'effects__preview--chrome', filter: 'grayscale', unit: '', min: 0, max: 1, step: 0.1 },
  'sepia': { class: 'effects__preview--sepia', filter: 'sepia', unit: '', min: 0, max: 1, step: 0.1 },
  'marvin': { class: 'effects__preview--marvin', filter: 'invert', unit: '%', min: 0, max: 100, step: 1 },
  'phobos': { class: 'effects__preview--phobos', filter: 'blur', unit: 'px', min: 0, max: 3, step: 0.1 },
  'heat': { class: 'effects__preview--heat', filter: 'brightness', unit: '', min: 1, max: 3, step: 0.1 }
};

const DEFAULT_EFFECT = 'none';

let currentEffect = DEFAULT_EFFECT;

const updateSlider = (effect) => {
  if (effect === 'none') {
    effectLevelContainer.classList.add('hidden');
    imgUploadPreview.style.filter = '';
    imgUploadPreview.className = EFFECTS[DEFAULT_EFFECT].class;
    effectLevelValue.value = '';
    return;
  }
  effectLevelContainer.classList.remove('hidden');
  const { min, max, step } = EFFECTS[effect];
  effectLevelSlider.noUiSlider.updateOptions({
    range: { min, max },
    start: max,
    step
  });
};

const resetEffects = () => updateSlider(DEFAULT_EFFECT);

const applyEffect = (effect, value) => {
  if (effect === 'none') {
    imgUploadPreview.style.filter = '';
    return;
  }
  const { filter, unit } = EFFECTS[effect];
  imgUploadPreview.style.filter = `${filter}(${value}${unit})`;
};

noUiSlider.create(effectLevelSlider, {
  range: { min: 0, max: 100 },
  start: 100,
  step: 1,
  connect: 'lower'
});

const onEffectLevelUpdate = (values, handle) => {
  const value = values[handle];
  effectLevelValue.value = value;
  applyEffect(currentEffect, value);
};

const onEffectChange = (evt) => {
  const effect = evt.target.value;
  imgUploadPreview.className = EFFECTS[effect].class;
  currentEffect = effect;
  updateSlider(effect);
};

effectLevelSlider.noUiSlider.on('update', onEffectLevelUpdate);
effectsButtons.addEventListener('change', onEffectChange);

export { resetEffects };
