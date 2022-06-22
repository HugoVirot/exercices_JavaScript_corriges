// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();                            // supprime le dernier élément du tableau

secretMessage.push('to','program');        // ajoute des éléments à la fin

var position = secretMessage.indexOf('easily');            // récupère l'index du mot
secretMessage.splice(position, 1, 'right');                // insère "right" au niveau de l'index de "easily" (le remplace)

secretMessage.shift();                         // supprime le 1er élément du tableau

secretMessage.unshift('Programming');      // ajoute un élément au début du tableau

var position2 = secretMessage.indexOf('get');              // on récupère l'index du 1er des 5 mots à supprimer : "get"

secretMessage.splice(position2, 5, 'know');                // on supprime un groupe de 5 mots à partir de cet index
                                                           // on remplace tout cela par 'know'

console.log(secretMessage.join(' '));                      // afficher le message : on "colle" les mots du tableau 
                                                           // en les séparant les mots par des espaces
console.log(secretMessage)

//afficher les 2 messages à la fin