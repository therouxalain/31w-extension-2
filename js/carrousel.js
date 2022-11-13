(function(){
    console.log("carrousel") //Vérifié OK
    let elmGalerie = document.querySelector(".galerie")
    let elmGalerieImg = document.querySelectorAll(".galerie img")
    let elmBouton = document.querySelector('.monBouton')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__x = document.querySelector('.carrousel__x')

    elmBouton.addEventListener('mousedown', function(){
        console.log("ouverture du carrousel")   //Vérifié OK
        elmCarrousel.classList.add('carrousel--ouvrir')
        for (const elmImg of elmGalerieImg){
            console.log(elmImg.getAttribute('src'))

        }

    })
    //Pour enlever la boîte
    elmCarrousel__x.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
})()