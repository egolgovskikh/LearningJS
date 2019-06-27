
function factorial(x) {        //Объявление функции
    if (x <= 1) return 1;        //Проверка условия окончания расчета
    return x * factorial(x-1);   //Вызов этой же функции с уменьшенным на 1 аргументом
}


alert(factorial(3))
