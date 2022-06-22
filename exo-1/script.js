let kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

kelvin = parseInt(kelvin);              //on convertit la saisie en nombre entier

celsius = kelvin - 273;                 //on convertit en degrés celsius

let fahrenheit = celsius * (9/5) + 32;  //on multiplie celsius par 9/5 et on lui ajoute 32 pour obtenir fahrenheit

console.log(kelvin + " degrés Kelvin = " + celsius + " degrés Celsius")

console.log(kelvin + " degrés Kelvin = " + Math.floor(fahrenheit) + " degrés Farenheit");    //on applique la méthode floor à farenheit pour obtenir un entier

