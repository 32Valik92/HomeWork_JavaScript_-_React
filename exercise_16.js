/**
 Здесь мы с вами рассмотрим одну из классических задач на рекурсию, 
 которую дают на собеседованиях. Звучит она очень просто:

Напишите функцию, которая вычисляет факториал.

Задание простое, но нужно понимать что такое факториал вообще. 
Факториал  – это число, умноженное на "себя минус один", затем на 
"себя минус два", и так далее до 1. Факториал n обозначается как n!

Отсюда мы можем понять, что функция должна принимать 1 аргумент, 
который будет являться числом. Будет неплохо, если вы на собеседовании 
сразу напишите проверку на приходящее значение :) Поэтому, если в нашу 
функцию приходит дробное число или не число  - возвращается строка с любым 
сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.

Сам же факториал с примерами выглядит вот так:

n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула
 */

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)){
        return 'Ви ввели некоректні дані';
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}