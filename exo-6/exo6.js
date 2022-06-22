console.log("exo-6");

// PARTIE 1 

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
console.log(joeInfo.cars);
// changer le nombre de salle de bains de Joe : il n'en possède qu'une.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// Joe vient d'acquérir un garage : changer la structure pour le refléter.
joeInfo.garage = true;
console.log(joeInfo.garage);


// PARTIE 2

var team = {};
team._players = [];
team._games = [];

team._players = [{
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 32
},
{
    firstName: 'Luis',
    lastName: 'Suarez',
    age: 31
},
{
    firstName: 'Ivan',
    lastName: 'Rakitic',
    age: 30
}
]

team._games = [{
    opponent: 'Real Madrid',
    teamGoals: 3,
    opponentGoals: 1
},
{
    opponent: 'Valencia',
    teamGoals: 2,
    opponentGoals: 0
},
{
    opponent: 'Atletico Madrid',
    teamGoals: 1,
    opponentGoals: 1
}]

function addPlayer(first, last, age) {
    team._players.push({ firstName: first, lastName: last, age: age });
}

function addGame(opponent, teamGoals, opponentGoals) {
    team._games[team._games.length] = { opponent: opponent, teamGoals: teamGoals, opponentGoals: opponentGoals };
}

addPlayer('Luka', 'Modric', 33);
addPlayer('Paul', 'Pogba', 27);
addPlayer('Antoine', 'Griezmann', 28);
console.log(team._players);

addGame('Sevilla FC', 4, 0);
addGame('Manchester Utd', 1, 0);
addGame('Bilbao', 2, 0);
console.log(team._games);


// ******** calcul du nombre total de buts marqués *********

function goalsSum() {

    var goalsTotal = 0; // on initialise le total à 0

    for (var i = 0; i < team._games.length; i++) {  // on parcourt le tableau des matchs
        goalsTotal += team._games[i].teamGoals;   // à chaque match, on ajoute le nombre de buts au total
    }

    console.log(goalsTotal);
}

goalsSum();  // on n'oublie pas d'appeler la fonction ;)


// ******** calcul de la moyenne de buts marqués par l'adversaire *********

function opponentAverage() {

    var average = 0;  // on intialise cette moyenne à 0
    var opponentGoalsTotal = 0; // on initialise le nombre de buts de l'adversaire

    for (var i = 0; i < team._games.length; i++) { // on parcourt les matchs et on additionne les buts adverses
        opponentGoalsTotal += team._games[i].opponentGoals;
    }

    average = opponentGoalsTotal / team._games.length; // moyenne = total de buts adverses / nombre de matchs joués

    console.log(average);
}

opponentAverage();


// ******** trouver le joueur le plus âgé *********

function oldestPlayer(list) {  // la fonction prend en paramètre la liste des joueurs

    console.log(list);  // on vérifie que la liste passée en paramètre est bien disponible
    var highestAge = 0;  // on initialise l'âge maxi à 0
    var highestAgeIndex = 0;  // on initialise son index

    for (var i = 0; i < list.length; i++) { // on boucle sur la liste des joueurs
        if (list[i].age > highestAge) {     // si l'âge du joueur examiné est supérieur à l'âge maxi trouvé
            highestAge = list[i].age;       // on le remplace
            highestAgeIndex = i;            // on mémorise ce nouvel index
        }
    }
    // on affiche le résultat
    console.log("le joueur le plus âgé est", list[highestAgeIndex].firstName, list[highestAgeIndex].lastName, "et il a", highestAge, "ans");
}

oldestPlayer(team._players);  // on n'oublie pas d'appeler la fonction ;)


// ******** trier les joueurs par ordre alphabétique *********

                                                // on fait appel à la fonction native js SORT
team._players.sort((player1, player2) => {      // elle va trier les joueurs du tableau en les comparant deux par deux
    if (player1.lastName < player2.lastName) return -1   // si le nom du 1er joueur vient avant celui du 2ème dans l'alphabet => il va être placé avant (index -1)
    return player1.lastName > player2.lastName ? 1 : 0   // si le nom du 1er joueur vient après celui du 2ème dans l'alphabet => on le place après (index +1)
  })                                                     // sinon (noms identiques) => pas de changement (0)

console.log(team._players);