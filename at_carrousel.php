<?php

//////////////////////////////////// IMPORTANT DE NOTER QUE LES COMMITS SONT RÉPARTIS SUR 2 REP GIT (voir URI ↓)
// dont le main de https://github.com/therouxalain/31w-extension/tree/tp1 (ce qui fait 3 endroits, désolé!)

/**
 * @package              at_Carrousel
 * @author               Alain Théroux
 * @copyright            2022 Alain Théroux
 * @license              GPL v2 or later
 * 
 * @wordpress-plugin
 * 
 * Plugin Name:          at_carrousel
 * Plugin URI:           https://github.com/therouxalain/31w-extension/tree/tp1 & https://github.com/therouxalain/31w-extension-2
 * Description:         Permet d'afficher une boîte modale de l'image sélectionnée d'une galerie. Pour ensuite accéder à toutes les images de la galerie
 * Author:               Alain Théroux
 * Author URI:           https://github.com/therouxalain/
 */


//////////////////////////////////// PREMIÈRE PARTIE – ENQUEUE


function at_enqueue()
{
    //s'assurer d'avoir la bonne version de CSS et JS
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");          //Fichier qui sera créé par SASS à la racine
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");     //Nom de dossier doit être donné pour dépot sans /js

    // var_dump(__FILE__); Vérif OK

    wp_enqueue_style(
        'at_carrousel_css',        ////////////CSS
        plugin_dir_url(__FILE__) . "style.css",
        array(),
        $version_css,
        false);

    wp_enqueue_script(
        'at_carrousel_js',         //////////////////JS
        plugin_dir_url(__FILE__) . "js/carrousel.js",
        array(),
        $version_js,
        true);           //TRUE pour que le script soit placé à la fin du html [vérifié: OK]
                
}
add_action("wp_enqueue_scripts", "at_enqueue");  //Le hook permet d'initialiser le plugin et la f. de rappel

//////////////////////////////////// SECONDE PARTIE – LE CARROUSEL

function boite_carrousel()
{
    // Le conteneur d'une boîte (HTML)

        $contenu =
        "<button class='monBouton'>Ouvrir carrousel</button>" //Bouton d'ouverture
        ."<div class='carrousel'>"
        . '<button class="carrousel__x">X<button>'              //Bouton de fermeture
        . '<figure class="carrousel__figure"></figure>'         //Conteneur d'images a remplir par JS
        . '<form class="carrousel__form__rad"></form>'               //Ceci intègre du contenu dans la boite
        . '</div> <!-- fin class="carrousel" -->';
    return $contenu;

}
add_shortcode('at_carrousel', 'boite_carrousel');
