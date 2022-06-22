console.log("exo-7");

// 1. Parcourir les items fournis pour les afficher un à un dans la console

console.log("Affichage des items (question 1)")

for (var i = 0; i < jsonDatas.length; i++) {
    for (var j = 0; j < jsonDatas[i].items.length; j++) {
        console.log(jsonDatas[i].items[j]);
    }
}


// 2. Créer un objet qui servira à traduire les types. Cet objet aura pour structure {type : "type traduit"}. Par exemple {videoGame:"Jeux Vidéos"}.

var typesTraduits = {
    "car": "voiture",
    "house": "maison",
    "game": "jeu",
    "videoGame": "jeu vidéo",
    "show": "spectacle"
}


// 3. Ajouter une nouvelle clé aux objets existants pour stocker le type traduit. Répéter le 1 pour vérifier le type traduit

// méthode 1 ajout types traduits
jsonDatas.forEach(element => element.translatedType = typesTraduits[element.type]);

// méthode 2 ajout types traduits
// function addTranslatedType(data1, data2)                        
// {
//     for (var i = 0; i < data1.length; i++) {
//         data1[i].translatedType = data2[data1[i].type];
//     }
// }

// addTranslatedType(jsonDatas, typesTraduits);

console.log("Affichage des objets avec types traduits (question 3)");
console.log(jsonDatas)


// 4. Créer un champ texte et un bouton. Lorsqu'on clique sur le bouton, on n'affiche que les articles du type écrit.

var input = document.createElement("INPUT");      // Créer un élément <input>
input.classList.add('searchInput');
document.body.appendChild(input);                 // Ajoute la balise <input> à la balise <body>

var btn = document.createElement("BUTTON");       // Créer un élément <button>
var t = document.createTextNode("Valider");       // Créer un noeud textuel
btn.appendChild(t);                               // Ajouter le texte au bouton
document.body.appendChild(btn);                   // Ajoute la balise <button> à la balise <body>

var input = document.querySelector('input:last-of-type');      // récupère le premier élément input de la page


// 5. Faire une checkbox pour afficher ou non les items en rupture de stock.

var checkbox = document.createElement("INPUT");   // Créer un élément <input>
checkbox.setAttribute("type", "checkbox");        // le définit en tant que checkbox
document.body.appendChild(checkbox);              // l'ajoute au body du document


// 4 et 5 : fonction qui affiche les objets du type choisi (checkbox cochée = afficher seulement ceux en stock)

btn.onclick = () => {

    var inputValue = document.getElementsByClassName('searchInput').value;    

    console.log(inputValue);

    for (var i = 0; i < jsonDatas.length; i++) {

        //si le type de l'objet i est identique au type saisi (traduit ou non)
        if (jsonDatas[i].translatedType === input.value || jsonDatas[i].type === input.value) {
            console.log(checkbox.checked);

            if (checkbox.checked)                                  //si la checkbox est cochée
            {

                console.log("Affichage des objets en stock uniquement de la catégorie choisie (questions 4-5)");

                for (var j = 0; j < jsonDatas[i].items.length; j++)   //on parcourt les articles de l'objet
                {
                    if (jsonDatas[i].items[j].quantity > 0) {
                        console.log(jsonDatas[i].items[j]);           //on affiche l'article (implicite : pas d'affichage si stock à 0)
                    }
                }

            } else {                                                  //autres cas (checkbox non cochée)

                console.log("Affichage de tous les objets de la catégorie choisie (questions 4-5)");

                jsonDatas[i].items.forEach(article => console.log(article))
            }
        }
    }
}


// 6. Ajouter la possibilité de trier les articles par nom ou par prix  et donner le choix de trier par ordre ASC/DESC.

var allArticles = [];                                //on définit un tableau vide qui contient tous les articles

for (var i = 0; i < jsonDatas.length; i++)           //on parcourt les catégories
{

    for (var j = 0; j < jsonDatas[i].items.length; j++) //puis les articles de chaque catégorie
    {
        allArticles.push(jsonDatas[i].items[j]);     //on ajoute chaque article au tableau avec push
    }
}

//*********************** TRIER PAR NOM (ORDRE ALPHABÉTIQUE) ****************************

var btnTriNom = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (ordre alphab.)");        // Créer un noeud textuel
btnTriNom.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNom);                     // Ajoute la balise <button> à la balise <body>

btnTriNom.onclick = () =>                                 //clic sur bouton = appel fonction
{
    allArticles.sort((a, b) => {                          //on applique le tri au tableau des articles
        if (a.name < b.name) return -1
        return a.name > b.name ? 1 : 0
    })

    console.log("ex 6 : Affichage des objets triés par ordre alphabétique");
    console.log(allArticles);                             //on affiche le résultat
}


//*********************** TRIER PAR NOM (ORDRE INVERSE ALPHABET) ****************************

var btnTriNomD = document.createElement("BUTTON");         // Créer un élément <button>
var t1 = document.createTextNode("Trier par nom (inverse ordre alphab.)");        // Créer un noeud textuel
btnTriNomD.appendChild(t1);                                // Ajouter le texte au bouton
document.body.appendChild(btnTriNomD);                     // Ajoute la balise <button> à la balise <body>

btnTriNomD.onclick = function ()                           //clic sur bouton = appel fonction
{
    allArticles.sort((a, b) => {
        if (a.name > b.name) return -1
        return a.name < b.name ? 1 : 0
    })                                                   //on applique le tri au tableau des articles

    console.log("ex 6 : Affichage des objets triés par ordre inverse de l'ordre alphabétique");
    console.log(allArticles);                              //on affiche le résultat
}


//******************************TRIER PAR PRIX CROISSANT********************************

var btnTriPrix = document.createElement("BUTTON");        // Créer un élément <button>
var t2 = document.createTextNode("Trier par prix croissant");       // Créer un noeud textuel
btnTriPrix.appendChild(t2);                               // Ajouter le texte au bouton
document.body.appendChild(btnTriPrix);                    // Ajoute la balise <button> à la balise <body>


btnTriPrix.onclick = function ()                          //clic sur bouton = appel fonction
{
    allArticles.sort((a, b) => a.price - b.price);        //on applique le tri au tableau des articles

    console.log("ex 6 : Affichage des objets triés par prix croissant");
    console.log(allArticles);                                   //on affiche le résultat
}


//******************************TRIER PAR PRIX DECROISSANT********************************

var btnTriPrixD = document.createElement("BUTTON");               // Créer un élément <button>
var t3 = document.createTextNode("Trier par prix décroissant");   // Créer un noeud textuel
btnTriPrixD.appendChild(t3);                                      // Ajouter le texte au bouton
document.body.appendChild(btnTriPrixD);                           // Ajoute la balise <button> à la balise <body>


btnTriPrixD.onclick = function ()                                 //clic sur bouton = appel fonction
{
    allArticles.sort((a, b) => b.price - a.price);        //on applique le tri au tableau des articles

    console.log("ex 6 : Affichage des objets triés par prix décroissant");
    console.log(allArticles);                                    //on affiche le résultat
}



// 7. Ajouter un formulaire simple permettant d'ajouter un objet à la liste d'objets.

function AddArticle() {
    let articleInserted = false;
    outer_loop:
    for (var i = 0; i < jsonDatas.length; i++) {

        if (jsonDatas[i].type == [document.forms[0].elements["type"].value]) {
            
            jsonDatas[i].items.push(
                {
                    "name": document.forms[0].elements["name"].value,
                    "description": document.forms[0].elements["description"].value,
                    "price": document.forms[0].elements["price"].value,
                    "quantity": document.forms[0].elements["quantity"].value,
                    "contact": {
                        lastName: document.forms[0].elements["lastName"].value,
                        firstName: document.forms[0].elements["firstName"].value,
                        address: document.forms[0].elements["address"].value,
                    }
                });

            articleInserted = true;
            alert('Article ajouté dans la famille ' + jsonDatas[i].type);
            document.forms[0].reset();
            console.log(jsonDatas);
            break outer_loop;
        }
    }

    if (!articleInserted){
    console.log('Echec de l\'insertion : la famille choisie n\'existe pas !');
    }
}

f.addEventListener("submit", function (e) {
    e.preventDefault();    // empêche l'envoi du formulaire, et donc le rechargement de la page
    AddArticle();          // ajoute l'article
});


// 9. Afficher tous les contacts.

for (var i = 0; i < jsonDatas.length; i++) {
    for (var j = 0; j < jsonDatas[i].items.length; j++) {
        console.log(jsonDatas[i].items[j]["contact"]);
    }
}









