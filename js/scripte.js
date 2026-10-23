const demandes = [
  {
    id: 1,
    titre: "Connexion Wi-Fi instable",
    description: "Le réseau se déconnecte régulièrement.",
    categorie: "Réseau",
    priorite: "Haute",
  },
  {
    id: 2,
    titre: "Installation d'un logiciel",
    description: "Installer un logiciel sur le poste.",
    categorie: "Logiciel",
    priorite: "Normale",
  },
  {
    id: 3,
    titre: "Clavier défectueux",
    description: "Certaines touches ne fonctionnent plus.",
    categorie: "Matériel",
    priorite: "Basse",
  },
];


const icones = {
  "Réseau": "fa-wifi",
  "Logiciel": "fa-microchip",
  "Matériel": "fa-keyboard",
};

// we get all element we need by id
const liste = document.getElementById("liste");
const compteur = document.getElementById("compteur");
const vide = document.getElementById("vide");
const button = document.getElementById("btn");
const titre = document.getElementById("titre");
const errorMessage = document.getElementById("error-title");
const categorie = document.getElementById("categorie");
const categorieError = document.getElementById("error-categorie")
const priorite = document.getElementById("priorite");
const prioError = document.getElementById("error-priorite")
const description = document.getElementById("description");
const descriptionError = document.getElementById("error-description")
// add event to the button for when click new ticket created

function afficherDemandes() {
  liste.innerHTML = "";

  demandes.forEach((demande) => {
    // aficher icon
    const icon = document.createElement("i")
    icon.className = "fa-solid " + icones[demande.categorie];
    const iconBox = document.createElement("span");
    iconBox.className = "icon-card";
    iconBox.append(icon);


    const number = document.createElement("div");
number.className = "id-Card";
number.textContent = "HD-00" + demande.id;

    const cardHaut = document.createElement("div")
    cardHaut.className = "card-haut";
    cardHaut.append(iconBox,number)




    const cardContainer = document.createElement("article");
    cardContainer.className = "parrent";
    const card = document.createElement("div");
    card.className = "tag";
    card.textContent = demande.titre;

    const cardDesc = document.createElement("div");
    cardDesc.className = "caption";
    cardDesc.textContent = demande.description;

    const tags = document.createElement("div");
    tags.className = "flexible";

    // creat suprime et modifier
    const buttons = document.createElement("div")
    buttons.className = "btns"

    const modifier = document.createElement("button")
    modifier.className = "modif"
    modifier.type = "button";
    modifier.textContent = "✎ Modifier"
    const suprime = document.createElement("button")
        suprime.className = "sup"
        suprime.type = "button";
            suprime.textContent = "♜ Supprimer"
            buttons.append(modifier,suprime)
            


            const cardCate = document.createElement("div");
            cardCate.className = "type";
            cardCate.textContent = demande.categorie;
            
            const cardPrio = document.createElement("div");
            cardPrio.className = "niveau  Haute " + demande.priorite.toLocaleLowerCase();
            cardPrio.textContent = demande.priorite;


            tags.append(cardCate, cardPrio);
            cardContainer.append(cardHaut,card, cardDesc, tags,buttons);
            liste.append(cardContainer);

            const idDemande = demande.id;

            suprime.addEventListener("click", () => {
  const confirmation = confirm(
    "Voulez-vous vraiment supprimer cette demande ?"
  );

  if (confirmation) {
    const index = demandes.findIndex(
      (item) => item.id === idDemande
    );

    if (index !== -1) {
      demandes.splice(index, 1);
      afficherDemandes();
    }
  }
});  
  // modifacation function 
  modifier.addEventListener("click", () => {

    

  })
 });

compteur.textContent = demandes.length + " demandes";


}

afficherDemandes();

// *****
button.addEventListener("click", (event) => {
  event.preventDefault();
  const value = titre.value;
  const categoriee = categorie.value;
  const prioritee = priorite.value;
  const descriptionee = description.value;
  if (value || categorie || priorite || description == "") {
    errorMessage.textContent = "champ required";
    categorieError.textContent = "champ required";
    prioError.textContent = "champ required";
    descriptionError.textContent = "champ required";
    return;
  }

  // 1. Create a new card 
const nouvelleDemande = {
  id: demandes.length + 1,
  titre: value,
  description: descriptionee,
  categorie: categoriee,
  priorite: prioritee,
};

// 2. Add the new request to the array
demandes.push(nouvelleDemande);

// 3. Display all requests again
afficherDemandes();
  titre.value = "";
});

