// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан"
  если userAge меньше 35
*/
// тут твой код
const userAge = 20;

if (userAge < 35) {
  console.log('ты пацан');
}


//задание 2
const isAdmin = false;

/*
  напиши ниже условие, которое выведет в консоль текст "доступ запрещен",
  если значение константы isAdmin ложно
*/
// тут твой код
const isAdmin = false;

if (!isAdmin) {
  console.log('доступ запрещен');
}


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/*
   напиши ниже условие, которое выведет в консоль текст "правильный пароль"
   только в том случае, если значения констант password и realPassword совпадают.
*/
// тут твой код
const password = "sherlock";
const realPassword = "holmes";

if (password === realPassword) {
  console.log('правильный пароль');
}


// задание 4
const myAge = "20";

/*
  напиши ниже условие, которое выведет в консоль текст "возраст указан верно"
  только в том случае, если ТИПОМ переменной myAge является number.
  Тебе понадобится оператор typeof: https://learn.javascript.ru/types#type-typeof
*/
// тут твой код
const myAge = "20";

if (typeof myAge === 'number') {
  console.log('возраст указан верно');
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль "икс меньше игрик" только
  в том случае, если значение переменной x меньше, чем значение переменной y
*/
// тут твой код
const x = 2.7;
const y = -6;

if (x > y) {
  console.log('икс больше игрик');
}
