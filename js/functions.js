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

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022'); // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN
extractDigits(2023); // 2023
extractDigits(-1); // 1
extractDigits(1.5); // 15


// // Тесты: Функция 1
// // Строка является палиндромом
// console.log(isPalindrome('топот')); // true
// // Несмотря на разный регистр, тоже палиндром
// console.log(isPalindrome('ДовОд')); // true
// // Это не палиндром
// console.log(isPalindrome('Кекс')); // false
// // Это палиндром
// console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

// // Тесты: Функция 2
// console.log(extractDigits('2023 год')); // 2023
// console.log(extractDigits('ECMAScript 2022')); // 2022
// console.log(extractDigits('1 кефир, 0.5 батона')); // 105
// console.log(extractDigits('агент 007')); // 7
// console.log(extractDigits('а я томат')); // NaN
// console.log(extractDigits(2023)); // 2023
// console.log(extractDigits(-1)); // 1
// console.log(extractDigits(1.5)); // 15
