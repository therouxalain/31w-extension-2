// Ce fichier est sur-commenté à des fins pédagogiques. 

(function(){
    //console.log("carrousel") Vérifié OK
    let elmGalerie = document.querySelector(".galerie")
    //console.log(elmGalerie);  Vérifié OK j'ai ma galerie
    let elmGalerieImg = document.querySelectorAll(".galerie img")
    // console.log(elmGalerieImg);  Vérifié OK (va chercher chaque image)
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')

    let elmBouton = document.querySelector('.monBouton')
    let elmCarrousel__x = document.querySelector('.carrousel__x')

    elmBouton.addEventListener('mousedown', function(){
        elmCarrousel.classList.add('carrousel--ouvrir')

        for (const elmImg of elmGalerieImg){
            let elmImg = document.createElement('img')
            elmImg.classList.add('carrousel__figure__img')
            elmImg.setAttribute('src', img.getAttribute('src'))
            elmCarrousel__figure.appendChild(elmImg)
        }

    })
    //Pour enlever la boîte
    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
})()