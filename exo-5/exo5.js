// you can write js here
console.log('exo-5');

var input = 'Vive le vent';                    // 1) variable "input"
var input = input.toUpperCase();               // convertie en majuscules => plus pratique pour la suite
console.log(input);

var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];   // 2) Tableau des voyelles, en majuscules

var resultArray = [];                          // 3) Tableau qui va stocker le résultat

for (let letter of input)                      // 4) 5) 6) boucle version 1 (for of et indexOf)
{
    console.log(letter);

    if (vowels.indexOf(letter) !== -1) {       // si indexOf ne renvoie pas -1 => lettre présente dans tableau des voyelles
        resultArray.push(letter);              // on l'ajoute au résultat
    }

}

/*
for (let i = 0; i < input.length; i++)         // bonus : boucle version 2 (for et includes)
{
    console.log(input[i]);

    if (vowels.includes(input[i])) {
        resultArray.push(input[i]);
    }
}
*/

console.log(resultArray.join(""));

