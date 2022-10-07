/**
 Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в 
себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по 
алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя 
командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
 */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let first = [];
    let second = [];
    let third = [];
    let other = [];
    
    for (let i = 0; i < arr.length; i++){
        if (i >= 0 && i < 3){
            first.push(arr[i]);
        }else if (i >= 3 && i < 6){
            second.push(arr[i]);
        } else if (i >= 6 && i < 9){
            third.push(arr[i]);
        } else {
            other.push(arr[i]);
        }
    }
    console.log([first, second, third, `Оставшиеся студенты: ${other.length === 0 ? '-' : other.join(', ')}`]);
    return [first, second, third, `Оставшиеся студенты: ${other.length === 0 ? '-' : other.join(', ')}`];

}

sortStudentsByGroups(students);