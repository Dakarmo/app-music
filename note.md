
## pour installer Angular

 - npm i -g @angular/cli 
 - ng version

 angular utilise TypeScript : google
 angularJs utilise JavaScript

## pour créer nouveau projet angular
- ng new nomDuProjet
- yes for the options


## lancer une application angular
- ng serve -o
- ng serve -o --port 3000

## angular.json  :
dit comment la compilation va se  faire
## gitignore  
(git statut) 
## editorconfig  : 
permet de formater le code source d'une certaine manière. Harmonize l'indentation par exemple (extension: editorconfig.exe) 
## src :
le dossier dans lequel on va travailler. c'est là que tout s'opère.

## app
    app.component html + css + typeScript
    app.module: c'est le fichier d'entrer

    les trois fichier de base
        nom-du-composant-component.html,
        nom-du-composant-component.css,
        nom-du-composant-component.ts,


## Créaton de composant en angular
ng generate component nom-du-composant // ng g c nom-du-composant


## les bonne Pratique
git add *
git commit


le décorateur @component marque la classe attachée comme étant un composant angular.
Il prend comme paramètre un objet.

{
    selector: définit la balisie html à utiliser pour appeler le composant dans une vue. Par défaut, angular prefix un 
        "app-" en plus du nom du composant.
        Mes ça peut être changé

    templateUrl: définit où se trouve la "VUE" du composant,

    styleUrls: définit où se trouvent les fichiers de style (.css)
}



