/*
 =====================================================
 CUSTOM FUNCTIONS
 =====================================================
 
1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem

 -----------------------------------------------------
 CODE GOES BELOW */
function showText(str) {
    console.log(str);
}
showText("Say Hallo");
showText("Cos tam");
/*
 -----------------------------------------------------

2. Napisz funkcję, która przyjmuje dwie liczby, oraz zwraca sumę tych liczb
    - input:  2, 3
    - output: 5

 -----------------------------------------------------
 CODE GOES BELOW */
function sum(a,b) {
    return a + b
};
sum(2, 3);
/*
 -----------------------------------------------------

3. Napisz funkcję, która przyjmuje jeden parametr (string) i następnie ZWRACA wartość tego stringa jako upperCase i jednocześnie wycina whitespaces
    - input: "  rambo  "
    - output: "RAMBO"

 -----------------------------------------------------
 CODE GOES BELOW */
function cos(d) {
    return d.toUpperCase().trim()
}n

/*
 -----------------------------------------------------

4. Napisz funkcję, która przyjmuje dwa parametry, pierwszy to liczba a drugi to jej dokładność w rozwinięciu dzisiętnym i ZWRACA odpowiednią wartość:
    - input:  11, 3
    - output: 11.000

 -----------------------------------------------------
 CODE GOES BELOW */
function number(e, f) {
    return e.toFixed(f)
}
/*
 -----------------------------------------------------

5. Napisz funkcję, która przyjmuje imię i ZWRACA nowego stringa o postaci: "Hello, my name is TUTAJ_IMIE". Następnie wywołanie funkcji
    przypisz do zmiennej o nazwie "greeting".
    - input:  "Tomek"
    - output: "Hello my name is Tomek"

 -----------------------------------------------------
 CODE GOES BELOW */
function name(n) {
    return "Hallo, my name is " + n
}
var hallo = name("Magda");
/*
 -----------------------------------------------------

6. Stwórz IIFE i wywołaj w niej dowolnego console.log
 -----------------------------------------------------
 CODE GOES BELOW */
(function() {
    consol.log(a)
})();
/*
 -----------------------------------------------------

 =====================================================
TIPS:
- pamiętaj o wywołaniu funkcji
- nazewnictwo funkcji
  * camelCase
  * nazwa ma wskazywać co funkcja wykonuje
- odpowiednie formatowanie

ŹLE:
function uppercaseitem(item){
  return item.toUpperCase();
}

DOBRZE:
function getUpperCasedName(name) {
  return name.toUpperCase();
}

 =====================================================
 */