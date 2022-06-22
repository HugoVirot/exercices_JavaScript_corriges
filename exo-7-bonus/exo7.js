console.log("exo-7-bonus");

//************************************** */ 1. Afficher les objets de data dans la table.**************************************************

var allArticles = [];                                    //on définit un tableau vide qui contient tous les articles

for (var i = 0; i < jsonDatas.length; i++)               //on parcourt les catégories
{
    for (var j = 0; j < jsonDatas[i].items.length; j++)  //puis les articles de chaque catégorie
    {
        jsonDatas[i].items[j].type = jsonDatas[i].type;  // on récupère le type de l'objet
        jsonDatas[i].items[j].contact = jsonDatas[i].items[j].contact.firstName + ' ' + jsonDatas[i].items[j].contact.lastName;
        // on récupère les infos du contact (objet) qu'on met en forme : prénom + nom  
        allArticles.push(jsonDatas[i].items[j]);         //on ajoute chaque article au tableau avec push
    }
}


// ****************** remplir le tableau *********************
function tableDisplay() {

    for (var i = 0; i < allArticles.length; i++)                        //pour chaque article de allArticles
    {
        var newRow = document.createElement("tr");                    //on crée une rangée ds le tableau
        document.getElementById("tbody").appendChild(newRow);         //on la lie au body de la table

        for (var property in allArticles[i])                          //pour chaque attribut d'un article
        {
            var newCell = document.createElement("td");                //on crée une cellule 
            newCell.innerHTML = allArticles[i][property];              //on la remplit avec la valeur de l'attribut
            newRow.appendChild(newCell);                               //on la lie à la nouvelle rangée créée précédemment 
        }
    }
    console.log(allArticles);
}

tableDisplay();


// ****************************** 2. Faire en sorte qu'en ajoutant un nouvel objet, il s'ajoute aussi dans la table. *******************************

function addArticle() {         //clic sur valider : appel fonction ajout
    allArticles.push({                                                    //on ajoute un article (sous forme d'objet) qui contient
        "name": document.forms[0].elements["name"].value,                 //tous les champs du formulaire (ses attributs)
        "description": document.forms[0].elements["description"].value,
        "price": document.forms[0].elements["price"].value,
        "quantity": document.forms[0].elements["quantity"].value,
        "contact": document.forms[0].elements["firstName"].value + ' ' + document.forms[0].elements["lastName"].value,
        "type": document.forms[0].elements["type"].value
    });
}


f.addEventListener("submit", function (e) {      //clic sur valider (submit) : déclenchement de la fonction

    e.preventDefault();                          //ne pas actualiser la page (pour conserver les articles ajoutés)

    addArticle();                                // appel fonction ajout article
    alert('Article ajouté');                     //afficher une fenêtre pop-up pour confirmer l'ajout

    var Parent = document.getElementById("tbody");  //retrouver le body du tableau

    while (Parent.hasChildNodes())                  //supprimer toutes les données
    {
        Parent.removeChild(Parent.firstChild);
    }

    tableDisplay();                              //afficher à nouveau le tableau, mis à jour
});


// 3. Adapter votre filtre et votre tri à la table.

// 4. Transformer le filtre (anciennement un champ texte) en une liste déroulante basée sur votre datas (il faut évidemment afficher la traduction et s'il n'y en a pas afficher le type simple).

// 5. Ajouter une checkbox au début de chaque ligne pour pouvoir sélectionner un ou plusieurs objets.

// 6. Ajouter un panier basé sur les items sélectionnés et réduire les quantités disponibles. (Vous pourrez changer la structure de données afin d'avoir des id)

// 7. Afficher le nombre d'articles et le prix du panier. Une fois qu'on valide le panier on veut déduire les quantités disponibles des items sélectionnées.

