function rozneDzialania(num1, num2) {
    if (num1 + num2 >= 0) {
        console.log(num1 + num2);
    } else {
        console.log('Wynik jest ujemny!');
    }

    if (num1 - num2 >= 0) {
        console.log(num1 - num2);
    } else {
        console.log('Wynik jest ujemny!');
    }

    if (num1 * num2 >= 0) {
        console.log(num1 * num2);
    } else {
        console.log('Wynik jest ujemny!');
    }
}

rozneDzialania(-6, -8);