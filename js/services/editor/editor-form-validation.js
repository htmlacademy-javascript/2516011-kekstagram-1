const TAG_ERROR_TEXT = 'Неверный формат хэш-тегов или дублирование';
const COMMENT_ERROR_TEXT = 'Комментарий не должен превышать 140 символов';
const VALID_SYMBOLS = /^#[a-zA-Z0-9]{1,19}$/;

const MAX_TAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const form = document.querySelector('.img-upload__form');
const hashTagsInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'has-error',
  successClass: 'has-success',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'text-help'
});

const validateTag = (tag) => VALID_SYMBOLS.test(tag);

const hasUniqueTags = (tags) => new Set(tags).size === tags.length;

const validateTags = (value) => {
  const tags = value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return tags.length <= MAX_TAGS &&
         tags.every(validateTag) &&
         hasUniqueTags(tags);
};

const validateComment = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(hashTagsInput, validateTags, TAG_ERROR_TEXT);
pristine.addValidator(commentInput, validateComment, COMMENT_ERROR_TEXT);

export { form, pristine };
