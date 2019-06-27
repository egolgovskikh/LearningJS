function my_function(n) {           //Объявление функции
    x=0;
    if (n <= 1) return 1;        //Проверка условия окончания расчета
    x++;
    return x + my_function(n-1);

}

