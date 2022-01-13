// Create a Map
const questions = new Map([
  [
    "Qui est l'empereur de France le 2 décembre 1804 ?",
    'Clovis',
    'Abraham Lincoln',
    'Napoleon Bonaparte',
  ][
    ("Quelle est la date d'indépendance des États-Unis",
    '4 juillet 1776',
    '18 avril 1856',
    '30 juin 1925')
  ][
    ("La chute de l'empire Romaine se situe en ?",
    '15 ap. J.-C.',
    '395 ap. J.-C.',
    '-740 av. J.-C.')
  ],
  [
    'Quelle est la capitale de la Slovénie ?',
    'Ljubljana',
    'Belgrade',
    'Bratislava',
  ],
  [
    "Combien d'habitants compte l'Irelande en 2020 ?",
    '1,365 Millions',
    '21 Millions',
    '4,9 Millions',
  ],
]);

const liste = document.querySelector('list');

let question = document.createElement('div');
question.textContent = 'text';
document.querySelector('#list').
