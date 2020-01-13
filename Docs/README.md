# AperoBox
L’application "ApéroBox" est une application permettant de commander des box apéritives et de se les faire livrer à domicile.
Cette application permet de gérer les utilisateurs, leurs commentaires ainsi que les box (création, modification et suppression)

## Prérequis
* Visual Studio Code : [VSC](https://code.visualstudio.com "Visual Studio Code Home Page")
* Git pour cloner le projet : [Git](https://git-scm.com/downloads "Git Download Page")

## Installation
Nous recommandons l'utilisation de Visual Studio Code.

1. Lancez Visual Studio Code et ouvrez un terminal
2. Positionnez-vous dans le répertoire où vous souhaitez installer le projet avec la commande "cd url" (exemple : cd C:\Users\XXXXX\Desktop)
3. Lancez la commande "git clone https://github.com/etu32766/AperoBoxAngular"
4. Vérifiez que NodeJS est bien installé sur votre machine avec la commande "node --version", si vous n'avez pas NodeJS installez-le avec le lien suivant : [NodeJS](https://nodejs.org "NodeJS Home Page"). Après l'installation, fermez et ouvrez à nouveau Visual Studio Code.
5. Positionnez-vous dans le dossier Source avec la commande "cd Source". Puis installez npm via la commande "npm install"
6. Lancez le projet via "ng serve" et naviguez vers l'url suivante : http://localhost:4200

(Si l'erreur suivante apparaît : "The term ng is not recongnized as the name of cmdlet", vérifiez si npm est disponible dans vos variables d'environnements, sinon il faut l'ajouter et le placer en première position)