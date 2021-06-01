
<a href="https://codeclimate.com/github/sandraLbdv/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/0ef45b38794327d912ed/maintainability" /></a> [![Build Status](https://travis-ci.org/sandraLbdv/frontend-project-lvl1.svg?branch=master)](https://travis-ci.org/sandraLbdv/frontend-project-lvl1)

# Игры Разума

«Игры разума» — набор из пяти консольных игр. Каждая игра задает вопросы, на которые игроку необходимо дать правильные ответы.
После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру.

Игры:
   - Калькулятор. Вычисление простых арифметических выражений.
   - Прогрессия. Поиск пропущенного числа в последовательности чисел.
   - Определение четного числа.
   - Определение наибольшего общего делителя.
   - Определение простого числа.

### Примеры успешной игры:

- Калькулятор

```
$ brain-calc
Welcome to the Brain Games!
What is the result of the expression?

May I have your name? sandra
Hello, sandra!

Question: 3 - 8
Your answer: -5
Correct!
Question: 8 + 10
Your answer: 18
Correct!
Question: 9 - 0
Your answer: 9
Correct!
Congratulations, sandra!
```

- Прогрессия

```
$ brain-progression
Welcome to the Brain Games!
What number is missing in the progression?

May I have your name? ivan
Hello, ivan!

Question: 8 18 28 38 48 58 68 78 .. 98
Your answer: 88
Correct!
Question: 7 14 21 28 35 .. 49 56 63 70
Your answer: 42
Correct!
Question: 9 16 23 30 37 44 51 58 .. 72
Your answer: 65
Correct!
Congratulations, ivan!
```

- Определение четного числа

```
$ brain-even
Welcome to the Brain Games!
Answer "yes" if the number is even, otherwise answer "no".

May I have your name? anna
Hello, anna!

Question: 11
Your answer: no
Correct!
Question: 86
Your answer: yes
Correct!
Question: 35
Your answer: no
Correct!
Congratulations, anna!
```

- Определение наибольшего общего делителя

```
$ brain-gcd
Welcome to the Brain Games!
Find the greatest common divisor of given numbers.

May I have your name? andrew
Hello, andrew!

Question: 99, 63
Your answer: 9
Correct!
Question: 81, 46
Your answer: 1
Correct!
Question: 88, 20
Your answer: 4
Correct!
Congratulations, andrew!
```

- Определение простого числа

```
$ brain-prime
Welcome to the Brain Games!
Answer "yes" if given number is prime. Otherwise answer "no".

May I have your name? dave
Hello, dave!

Question: 26
Your answer: no
Correct!
Question: 23
Your answer: yes
Correct!
Question: 35
Your answer: no
Correct!
Congratulations, dave!
```

### Пример проигрыша:

```
$ brain-calc
Welcome to the Brain Games!
What is the result of the expression?

May I have your name? olga
Hello, olga!

Question: 1 * 1
Your answer: 15
'15' is wrong answer ;(. Correct answer was '1'.
Let's try again, olga!
```
