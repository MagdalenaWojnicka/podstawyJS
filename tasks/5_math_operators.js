/*
 =====================================================
 MATH: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math
 =====================================================

 Wykonaj poniższe zadania z uzyciem metod oraz wynik każdego zadania wyświetl w konsoli:
 - Math.random() - zwraca losową wartość w zakresie od 0 do 1
 - Math.round() - zaokrągła wartość w górę lub w dół
 - Math.max(a, b, c...) - zwraca największą wartość spośród przekazanych wartosci
 - Math.pow(a, b) - podnosi wartość a do potegi b

1. Napisz funkcję, która przyjmuje dwa parametry. Pierwszy parametr to wartość, a drugi to potęga,
   do której wartość zostanie podniesiona. Wynik wyświetl w konsoli:
   - input: 2,3
   - output: "2 do potegi 3 to: 8"
 -----------------------------------------------------
 CODE GOES BELOW */
function getPow(a, b) {
    return Math.pow(a, b);
}
getPow(2, 11);
/*
 -----------------------------------------------------
2. Napisz funkcję, która zwraca losową liczbę w zakresie od 0 do 1.
   - output: np. 0.32124
 -----------------------------------------------------
 CODE GOES BELOW */
function getRandomNumber() {
    return Math.random()
}
getRandomNumber();
/*
 -----------------------------------------------------

3. Napisz funkcję, która zwraca losową liczbę w zakresie od 1 do 10;
   - output: np. 3.32124
 -----------------------------------------------------
 CODE GOES BELOW */
function getRandomNumberToTen() {
    return Math.random() *10
}
getRandomNumberToTen();
/*
 -----------------------------------------------------

4. Napisz funkcję, która przyjmuje 3 parametry (liczby) i zwraca parametr z największą wartością
   - input: 4, 10, 3
   - output: 10
 -----------------------------------------------------
 CODE GOES BELOW */
function takeMaxNumber(a, b, c) {
    return Math.max(a, b, c);
}
takeMaxNumber(30, 50, 10);
/*
 -----------------------------------------------------

5. Napisz metodę, która przyjmuje 1 parametr (liczbę) i zaokrągla tą liczbę do całosci.
   - input: 4.33
   - output: 4

   - input: 5.76
   - output: 6

 -----------------------------------------------------
 CODE GOES BELOW */
function roundValue(number) {
    return Math.round(number);
}
roundValue(10.345);
/*
 -----------------------------------------------------

6. Napisz funkcję, która przyjmuje dwie liczby i zwraca resztę z dzielenia tych liczb.
 -----------------------------------------------------
 CODE GOES BELOW */
function reszta(a, b) {
    return a % b;
}
/*
 -----------------------------------------------------

7. Napisz funkcję, która przyjmuje dwie liczby i zwraca iloczyn tych liczb
 -----------------------------------------------------
 CODE GOES BELOW */
function iloczyn(a, b) {
    return a * b;
}
/*
 -----------------------------------------------------

8. Napisz funkcję, która przyjmuje dwie liczby i zwraca różnicę tych liczb
 -----------------------------------------------------
 CODE GOES BELOW */
function roznica(a, b) {
    return a - b;
}
/*
 -----------------------------------------------------

9. Napisz funkcję, która przyjmuje dwie liczby i zwraca iloraz tych liczb.
 -----------------------------------------------------
 CODE GOES BELOW */
function iloraz(a, b) {
    return a / b;
}
/*
 -----------------------------------------------------

10. Napisz funkcję, która liczy pole koła (pi r^2). Wynik ma być podany z dokładnością
    do 2 cyfr po przecinku
 -----------------------------------------------------
 CODE GOES BELOW */
function getCircleArea(r) {
    var area = Math.PI * Math.pow(r, 2);
    return area.toFixed(2);
}
getCircleArea(40);
/*
 -----------------------------------------------------

11. Napisz funkcję, która liczy deltę ( b^2 - 4ac). Wynik ma być zaokrąglony do całości.
 -----------------------------------------------------
 CODE GOES BELOW */
function  countDelta(a, b, c) {
    return b * b - 4 * a * c
}
/*
 -----------------------------------------------------

12. Stwórz funkcję, która podbija wartość globalnej zmiennej o nazwie counter = 0, o jeden przy
    każdym wywołaniu. Następnie wywołaj tą funkcję 3 razy i wyświetl wartość zmiennej counter
    w console.logu

 -----------------------------------------------------
 CODE GOES BELOW */
var counter = 0;

function counterUp() {
    counter++;
}
/*
 -----------------------------------------------------

 =====================================================
 TIPS:
 - pamiętaj o wywołaniu funkcji
 - nazewnictwo funkcji
 * camelCase
 * nazwa ma wskazywać co funkcja wykonuje
 - odpowiednie formatowanie
 - Math. zawsze wielką literą!

 =====================================================
*/

