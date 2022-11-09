<?php

/**
 * @package igc31w
 */

/**
 * at_carrousel
 * 
 * @package              igc31w
 * @author               Alain Thérouxx
 * @copyright            2022 Alain Thérouxx
 * @license              GPL v2 or later
 * 
 * @wordpress-plugin
 * 
 * Plugin Name:          at_carrousel
 * Plugin URI:           https://github.com/RedouaneT/31w_extension
 * Description:         Permet d'afficher une boite modale de l'image sélectionné d'une galerie
 * Version:              1.0.0
 * Requires at least:    5.2
 * Requires PHP:         7.2
 * Author:               Alain Thérouxx
 * Author URI:           https://github.com/
 * Text Domain:          31w_extension
 * License:              GPL v2 or later
 * License URI:          https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:
 */


function at_enqueue()
{

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style('at_carrousel', plugin_dir_url(__FILE__) . "style.css", array(), $version_css, false);
    wp_enqueue_script('at_carrousel_js', plugin_dir_url(__FILE__) . "js/carrousel.js", array(), $version_js, true);
}

add_action("wp_enqueue_scripts", "at_enqueue");

function at_boite_carrousel()
{
    // Le conteneur d'une boîte
    $contenu = "<section class='carrousel'>"
        . '<button class="carrousel__x">X</button>'
        . '<figure class="carrousel__figure"></figure>'
        . '<form class="carrousel__form" action=""></form>'
        . '</section> <!-- fin class="carrousel" -->';

    return $contenu;
}
add_shortcode('at_carrousel', 'at_boite_carrousel');
