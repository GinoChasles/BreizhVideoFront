# BreizhVideoFront

Initialisation du projet

yarn create react-app mon-app
npm init
utilisation de react-boostrap
import des CDN dans le index.html

petit soucis avec babel7 résolu et supprimant les nodes modules + yarn install

Tri des fichiers inutiles de réact, création d'un dossier components pour gérer nos composants, Film, Village et Evenement

Dans le composant Village, on crée un tableau dynamique reprenant les keys pour remplir notre haut de tableau (name et post_code)
et ensuite on map également sur chaque objet de notre API (ou pour l'instant sur chaque objet de notre data json créé...)
Problème sur les fetch des méthodes get/delete, cross origin et "ERR_NAME_NOT_RESOLVED" après avoir utilisé le header access-control-allow-origin, je me retrouve avec l'erreur "SyntaxError: Unexpected end of input".
Je décide de continuer sans utiliser l'api..

Customisation du tableau dynamique de village

Mise en place grace a react-dom-router d'une navbar constitué d'un home, evenements, films, villages ainsi que la simulation d'onglets (dom virtuel) via les switch et des chemins de routes.

Création du composant Film, utilisation de react bootstrap et du composant Accordion, de la même manière que le tableau dynamique du composant village, on map sur sur les cards pour chaque objet de notre data (théoriquement de notre API..)
Petit soucis sur les keys uniques, résolu en 15min.

Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference.

Cela n'empêche pas le fonctionnement pour l'instant. A traiter plus tard 

customisation du composant films

ajout d'un bouton ajout de village

mis en place d'un formulaire d'ajout de village, soucis d'import babel, surement node module a réinstaller..

Donc soucis de fetch pour le back, cependant les requetes fonctionnent dessus. (via YARC équivalent de postman)

