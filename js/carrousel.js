(function () {
	let elmGalerie = document.querySelector(".galerie");
	let elmGalerieImg = document.querySelectorAll("figure img");
	let elmCarrousel = document.querySelector(".carrousel");
	let elmCarrousel__figure = document.querySelector(".carrousel__figure");
	let elmCarrousel__x = document.querySelector(".carrousel__x");
	let elmCarrousel__form = document.querySelector(".carrousel__form");
	let carrouselInit = false;
	let nbrImg = elmGalerieImg.length;
	let index = 0;

	elmGalerieImg.forEach((elmImg, i) => {
		// Associer l'index aux images
		elmImg.setAttribute("data-index", i);
		// Initialisation du carrousel Au click sur une image de la galerie
		elmImg.addEventListener("mousedown", function (e) {
			init_carrousel();
			index = parseInt(e.target.dataset.index);
			navigation_carrousel();
		});
	});

	//  Initialisation carrousel
	function init_carrousel() {
		elmCarrousel.classList.add("carrousel--ouvrir");
		if (carrouselInit === false) {
			ajout_boutons_navigation_carrousel();
			ajout_radio_dans_carrousel(nbrImg);
			Ajout_img_dans_carrousel();
			elmCarrousel__x.addEventListener("mousedown", function () {
				elmCarrousel.classList.remove("carrousel--ouvrir");
			});
			carrouselInit = true;
		} else {
			console.log("Le carrousel a été initialisé");
		}
	}

	//  Ajouter les images dans le carrousel
	function Ajout_img_dans_carrousel() {
		elmGalerieImg.forEach((elmImg) => {
			let elmCarrouselImg = document.createElement("img");
			elmCarrouselImg.setAttribute("src", elmImg.src);
			elmCarrouselImg.setAttribute("data-index", elmImg.dataset.index);
			elmCarrouselImg.classList.add("carrousel__figure__img");
			elmCarrousel__figure.appendChild(elmCarrouselImg);
		});
	}

	//  Ajouter les boutons radio dans le carrousel
	function ajout_radio_dans_carrousel(nbrImg) {
		for (let i = 0; i < nbrImg; i++) {
			let elmCarrousel__form__radio = document.createElement("input");
			elmCarrousel__form__radio.setAttribute("type", "radio");
			elmCarrousel__form__radio.classList.add("carrousel__form_rad");
			elmCarrousel__form__radio.setAttribute("name", "carrousel__form__rad");
			elmCarrousel__form__radio.setAttribute("data-index", i);
			elmCarrousel__form.appendChild(elmCarrousel__form__radio);

			elmCarrousel__form__radio.addEventListener("mousedown", function (e) {
				index = parseInt(e.target.dataset.index);
				navigation_carrousel();
			});
		}
	}

	function navigation_carrousel() {
		const carrousel__figure__img = elmCarrousel__figure.querySelectorAll("img");
		const elmCarrousel__form__radio = elmCarrousel__form.querySelectorAll(
			'input[type = "radio" ]'
		);
		carrousel__figure__img.forEach((elmImg) => {
			if (index === parseInt(elmImg.dataset.index)) {
				elmImg.classList.add("carrousel__figure__img--activer");
			} else {
				elmImg.classList.remove("carrousel__figure__img--activer");
			}
		});
		elmCarrousel__form__radio.forEach((elmRadio) => {
			if (index === parseInt(elmRadio.dataset.index)) {
				elmRadio.checked = true;
			} else {
				elmRadio.checked = false;
			}
		});
	}

	// Ajouter et configurer Des boutons de navigation dans le carrousel
	function ajout_boutons_navigation_carrousel() {
		// Bouton suivant
		let elmCarrousel__bouton__suivant = document.createElement("button");
		elmCarrousel__bouton__suivant.classList.add(
			"carrousel__navigation_button--suivant"
		);
			elmCarrousel__bouton__suivant.innerHTML = ">";
		elmCarrousel.appendChild(elmCarrousel__bouton__suivant);
		elmCarrousel__bouton__suivant.addEventListener("mousedown", function () {
			index++;

			if (index > nbrImg - 1) {
				index = 0;
			}
			navigation_carrousel();
		});

		// Bouton précédant
		let elmCarrousel__bouton__precedant = document.createElement("button");
		elmCarrousel__bouton__precedant.classList.add(
			"carrousel__navigation_button--precedant"
		);
			elmCarrousel__bouton__precedant.innerHTML = "<";
		elmCarrousel.appendChild(elmCarrousel__bouton__precedant);
		elmCarrousel__bouton__precedant.addEventListener("mousedown", function () {
			index--;

			if (index < 0) {
				index = nbrImg - 1;
			}
			navigation_carrousel();
		});
	}
})();
