### Brain Games:
[![Actions Status](https://github.com/gorm3531/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/gorm3531/frontend-project-44/actions)
Описание
«Игры разума» — проект с пятью играми внутри. Все пять игр имитируют задачи, которые выполняют начинающие программисты. Принцип игр очень простой: игра задаёт вам вопрос, а вы стараетесь правильно ответить. Игра состоит из 3 раундов. Если вы ответили на все 3 вопроса правильно — вы победили. Если нет — у вас есть неограниченное количество попыток сыграть заново и победить.

Игры
«Чётное ли число?» — определите, является ли число чётным.
«Калькулятор» — вычислите результат арифметического выражения.
«Найдите соответствующее пропущенное число в списке чисел» — определите пропущенное число в последовательности.
«Найдите НОД» — найдите наибольший общий делитель двух чисел.
«Число — простое?» — определите, является ли число простым.
Установка
Клонируйте репозиторий проекта:
*git clone <ссылка на репозиторий>*
Перейдите в директорию проекта:
*cd frontend-project-44*
Установите зависимости:
*make install*

(Как запускать написано правее от названия игры)

1. Игра "Чётность"(brain-even)
Запуск: brain-even
Сценарий победы:
Welcome to the Brain Games!
May I have your name? Alice
Hello, Alice!
Answer "yes" if the number is even, otherwise answer "no".
Question: 24
Your answer: yes
Correct!
Question: 17
Your answer: no
Correct!
Question: 8
Your answer: yes
Correct!
Congratulations, Alice!
Сценарий поражения:
Question: 15
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Alice!
2. Игра "Калькулятор"(brain-calc)
Запуск: brain-calc
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 15 + 7
Your answer: 22
Correct!
Question: 5 * 4
Your answer: 20
Correct!
Question: 25 - 8
Your answer: 17
Correct!
Congratulations, Sam!
Сценарий поражения:
Question: 10 * 3
Your answer: 31
'31' is wrong answer ;(. Correct answer was '30'.
Let's try again, Sam!
3. Игра "НОД"(brain-gcd)
Сценарий победы:
Welcome to the Brain Games!
May I have your name? Andrew
Hello, Andrew!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Andrew!
Сценарий поражения:
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Andrew!
4. Игра «Арифметическая прогрессия»(brain-progression)
Сценарий победы:
Welcome to the Brain Games!
May I have your name? Lora
Hello, Lora!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Lora!
Сценарий поражения:
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Lora!
5. Игра «Простое ли число?» (brain-prime)
Welcome to the Brain Games!
May I have your name? Kein
Hello, Kein!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 8
Your answer: no
Correct!
Question: 17
Your answer: yes
Correct!
Congratulations, Kein!
сценарий поражения:
Question: 25
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Kein!


Правила каждой игры:
Чётность - определить, чётное ли число, yes / no

Калькулятор - вычислить результат выражения (+, -, *), числовой ответ

НОД - найти наибольший общий делитель двух чисел, числовой ответ

Арифметическая прогрессия - найти пропущенное число в прогрессии, числовой ответ

Простое ли число? - определить, простое ли число, yes / no






