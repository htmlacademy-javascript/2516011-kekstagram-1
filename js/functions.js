function isPalindrome(str) {
  const strWithoutSpaces = str.toLowerCase().replaceAll(' ', '');
  const strLength = strWithoutSpaces.length;

  for (let i = 0; i < strLength / 2; i++) {
    if (strWithoutSpaces[i] !== strWithoutSpaces[strLength - 1 - i]) {
      return false;
    }
  }

  return true;
}

function extractDigits(input) {
  if (typeof input === 'string') {
    let digits = '';

    for (let i = 0; i < input.length; i++) {
      if (!isNaN(parseInt(input[i], 10))) {
        digits += input[i];
      }
    }

    return digits ? parseInt(digits, 10) : NaN;
  } else if (typeof input === 'number') {
    return extractDigits(input.toString());
  } else {
    return NaN;
  }
}

function PadString(str, minLength, padChars) {
  const padLength = minLength - str.length;
  const repeatCount = Math.ceil(padLength / padChars.length);
  let paddedChars = '';

  if (padLength <= 0) {
    return str;
  }

  for (let i = 0; i < repeatCount; i++) {
    paddedChars = padChars.substring(0, padLength - (i * padChars.length)) + paddedChars;
  }

  return paddedChars + str;
}

const checkMaxStringLength = (str, maxLength) => str.length <= maxLength;

// Тесты: Функция 1
// Строка является палиндромом
window.console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
window.console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
window.console.log(isPalindrome('Кекс')); // false
// Это палиндром
window.console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// Тесты: Функция 2
window.console.log(extractDigits('2023 год')); // 2023
window.console.log(extractDigits('ECMAScript 2022')); // 2022
window.console.log(extractDigits('1 кефир, 0.5 батона')); // 105
window.console.log(extractDigits('агент 007')); // 7
window.console.log(extractDigits('а я томат')); // NaN
window.console.log(extractDigits(2023)); // 2023
window.console.log(extractDigits(-1)); // 1
window.console.log(extractDigits(1.5)); // 15

// Тесты: Функция 3
window.console.log(PadString('1', 2, '0')); // '01'
window.console.log(PadString('1', 4, '0')); // '0001'
window.console.log(PadString('q', 4, 'werty')); // 'werq'
window.console.log(PadString('q', 4, 'we')); // 'wweq'
window.console.log(PadString('qwerty', 4, '0')); // 'qwerty'

// Тесты: Функция 4
window.console.log(checkMaxStringLength('проверяемая строка', 20)); // true
window.console.log(checkMaxStringLength('проверяемая строка', 18)); // true
window.console.log(checkMaxStringLength('проверяемая строка', 10)); // false
