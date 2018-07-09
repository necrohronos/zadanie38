function myNumbers() {
    var x = prompt("wpisz pierwszą liczbę");
    var y = prompt("wpisz drugą liczbę");
    var a = parseInt(x) + parseInt(y);
    var b = x - y;
    var c = x * y;
    if (a >= 0 && b >= 0 && c >= 0) {
        console.log("Wynik dodawania wynosi " + a);
        console.log("Wynik odejmowania wynosi " + b);
        console.log("wynik mnożenia wynosi " + c);
    }
    else {
        console.log("wynik jest ujemny");
    }
}
