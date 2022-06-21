'use strict';

// Вывести текущий день и время на страницу
const date = new Date();
const day = date.getDay(); // 0 - 6
const dayTitle = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const timeSet = ['ночь', 'утро', 'день', 'вечер'];

let dateStop = new Date('1 January 2023').getTime();
let dateNow = new Date().getTime();
let timeNow = date.toLocaleTimeString('en');
let timeRemaining = (dateStop - dateNow) / 1000;
let days = Math.floor(timeRemaining / 60 / 60 / 24);
let hours = date.getHours();
let hour = '';

function checkHour() {
  if (hours > '1' && hours < '6') {
    hour = "Доброй йночи";
  } else if (hours >= '6' && hours < '12') {
    hour = "Доброе утро";
  } else if (hours >= '12' && hours < '18') {
    hour = "Добрый день";
  } else {
    hour = "Добрый вечер";
  }
}
checkHour();

console.log(hour);
console.log(`Сегодня ${dayTitle[day]}`);
console.log(`Текущее время ${timeNow} `);
console.log(`До нового года осталось ${days} дня`);