function calculateDigits() {
    // Получаем значение числа из поля ввода
    const number = parseInt(document.getElementById('number').value);

    if (isNaN(number)) {
        document.getElementById('result').innerText = 'Пожалуйста, введите корректное число';
        return;
    }

    // Вычисляем количество сотен, десятков и единиц
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;

    // Отображаем результат
    document.getElementById('result').innerText = `Сотни: ${hundreds}, Десятки: ${tens}, Единицы: ${units}`;
}
