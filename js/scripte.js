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
const categorie = document.getElementById("categorie");
const priorite = document.getElementById("priorite");
const description = document.getElementById("description");
// add event to the button for when click new ticket created

function afficherDemandes() {
  liste.innerHTML = "";

  demandes.forEach((demande) => {
    // aficher icon
    const icon = document.createElement("i")
    icon.className = "fa-solid " + icones[demande.categorie];
    const iconBox = document.createElement("span")
    iconBox.className = "icon-card"
    iconBox.append(icon)



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

    const modifier = document.createElement("div")
    modifier.className = "modif"
    modifier.textContent = "✎ Modifier"
    const suprime = document.createElement("div")
        suprime.className = "sup"
            suprime.textContent = "♜ Supprimer"
            buttons.append(modifier,suprime)
            
            
            
            const cardCate = document.createElement("div");
            cardCate.className = "type";
            cardCate.textContent = demande.categorie;
            
            const cardPrio = document.createElement("div");
            cardPrio.className = "niveau  Haute " + demande.priorite.toLocaleLowerCase();
            cardPrio.textContent = demande.priorite;
            
            tags.append(cardCate, cardPrio);
            cardContainer.append(iconBox,card, cardDesc, tags,buttons);
            liste.append(cardContainer);
  });
}

afficherDemandes();

// *****
button.addEventListener("click", (event) => {
  event.preventDefault();
  const value = titre.value;
  const categoriee = categorie.value;
  const prioritee = priorite.value;
  const descriptionee = description.value;
  if (value && categorie && priorite && description == "") {
    alert("une champ il rest vide");
    return;
  }

  // 1. Create a new request object
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

  // we creat th div that we put each one of card element and one container insid it we put card with all her info
  // const tags = document.createElement("div");
  // tags.className = "flexible";
  // const cardContainer = document.createElement("article");
  // cardContainer.className = "parrent";
  // const card = document.createElement("div");
  // card.className = "tag";
  // const cardDesc = document.createElement("div");
  // cardDesc.className = "caption";
  // const cardCate = document.createElement("div");
  // cardCate.className = "type";
  // const cardPrio = document.createElement("div");
  // cardPrio.className = "niveau";
  // card.textContent = value;
  // cardDesc.textContent = descriptionee;
  // cardCate.textContent = categoriee;
  // cardPrio.textContent = prioritee;
  // // liste.append(card);
  // // liste.append(cardDesc);
  // // liste.append(cardCate);
  // // liste.append(cardPrio);
  // // append tags to div for we can costomize
  // cardContainer.append(card, cardDesc, tags);
  // tags.append(cardCate, cardPrio);
  // liste.append(cardContainer);
  titre.value = "";
});
