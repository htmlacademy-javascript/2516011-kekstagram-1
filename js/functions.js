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

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

// // Тесты: Функция 1
// // Строка является палиндромом
// console.log(isPalindrome('топот')); // true
// // Несмотря на разный регистр, тоже палиндром
// console.log(isPalindrome('ДовОд')); // true
// // Это не палиндром
// console.log(isPalindrome('Кекс')); // false
// // Это палиндром
// console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
