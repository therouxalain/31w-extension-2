<?php

/**
 * Plugin Name
 *
 * @package           Carrousel
 * @author            Alain Théroux
 * @copyright         Collège de Maisonneuve
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       at_carrousel
 * Description:       Description 
 * Author:            Alain Théroux
 * Author URI:        https://github.com/therouxalain
 */

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    $contenu = 
    "<div class='boite'>"
    . "<code>-------Auteur: " . get_the_author() . "</code>"
    . "<date>-------Date de publication: " . get_the_date() . "</date>"
    . "<h5>-------Adresse URL" . get_the_guid() . "</h5>"
    . '</div> <!-- fin class="boite" -->';
    
    return $contenu;
   }
   add_shortcode('at_carrousel', 'genere_html');