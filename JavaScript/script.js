document.addEventListener("DOMContentLoaded", function() {
    const listeImagesDiv = document.querySelector(".liste-images");
    const popup = document.querySelector(".popup");
    const popupImg = document.querySelector(".popup-img");

    // 1. Génération automatique des sections d'albums avec alternance gauche/droite (Z-Pattern)
    images.forEach(function(image, numCase) {
        const section = document.createElement("section");
        
        let classeZ = (numCase % 2 === 0) ? "section-gauche" : "section-droite";
        section.classList.add(classeZ);

        section.innerHTML = `
            <div class="bloc-image">
                <h3 class="titre-album-pochette">${image.titre}</h3>
                <img src="${image.chemin}" class="image-cliquable" alt="${image.titre}">
                <div class="credits-image">
                    <p class="artiste">${image.artiste}</p>
                    <p class="label">Label : ${image.label}</p>
                    <p class="source"><a href="${image.source}" target="_blank">Source</a></p>
                </div>
            </div>
            <p>${descriptionsImages[numCase]}</p>
        `;
        listeImagesDiv.appendChild(section);
    });

    // 2. Gestion de l'affichage du zoom (popup) lors du clic sur une pochette d'album
    const toutesLesImages = document.querySelectorAll(".image-cliquable");
    toutesLesImages.forEach(function(img) {
        img.addEventListener("click", function(event) {
            popup.classList.remove("popup-invisible");
            popup.classList.add("popup-visible");
            const sourceImage = event.target.getAttribute("src");
            popupImg.setAttribute("src", sourceImage);
        });
    });

    // Fermeture de la fenêtre de zoom au clic
    popup.addEventListener("click", function() {
        popup.classList.replace("popup-visible", "popup-invisible");
    });

    // 3. Affichage d'un message de confirmation uniquement si le formulaire est valide
    const boutonEnvoyer = document.querySelector(".Envoyer");
    const formulaire = document.querySelector("#form-contrib");

    boutonEnvoyer.addEventListener("click", function() {
    // Si le formulaire n'est pas invalide (donc s'il est bien rempli)
    if (!formulaire.checkValidity() == false) {
        alert("Merci ! Votre suggestion a bien été envoyée.");
        }
    });
});