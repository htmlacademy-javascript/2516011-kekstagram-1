const TAG_ERROR_TEXT = 'Неверный формат хэш-тегов или дублирование';
const COMMENT_ERROR_TEXT = 'Комментарий не должен превышать 140 символов';
const VALID_SYMBOLS = /^#[a-zA-Z0-9]{1,19}$/;

const form = document.querySelector('.img-upload__form');
const hashTagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-error',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text-help'
});

const validateTags = (value) => {
  const tags = value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((tag) => tag.trim().length);
  const tagSet = new Set();

  for (const tag of tags) {
    if (!VALID_SYMBOLS.test(tag)) {
      return false;
    }
    if (tagSet.has(tag)) {
      return false;
    }
    tagSet.add(tag);
  }

  if (tagSet.size > 5) {
    return false;
  }

  return true;
};

pristine.addValidator(
  hashTagsInput,
  validateTags,
  TAG_ERROR_TEXT
);

pristine.addValidator(
  commentInput,
  (value) => value.length <= 140,
  COMMENT_ERROR_TEXT
);

export { form, pristine };
