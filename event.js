// querySelectorAll récupére tout les boutons et les mets dans un tableau
const buttonsList = document.querySelectorAll('.button');
console.log(buttonsList);

// querySelector récupére uniquement le premier
const premierButton = document.querySelector('.button');
console.log(premierButton);

// Créer fonction
const changerCouleur = (event) => {
    const elementClique = event.target;
    elementClique.classList.toggle('button-red');

    const parentDelElementClique = elementClique.parentNode
    parentDelElementClique.classList.toggle('button-red');

    // alert('Tu as cliqué sur ' + elementClique.innerHTML)
}

// Ajouter event listener
premierButton.addEventListener('click', changerCouleur);

// Ajouter event listener pour tout les boutons
for (const button of buttonsList) {
    button.addEventListener('click', changerCouleur);
}



