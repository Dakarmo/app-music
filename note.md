
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




## pour installer Angular

 npm i -g @angular/cli 
 ng version

 angular utilise TypeScript : google
 angularJs utilise JavaScript

## pour créer nouveau projet angular
yes ng new nomDuProjet
 yes for the options


## lancer une application angular
ng serve -o
ng serve -o --port 3000

npm start pour démarrer un projet angular

## angular.json  dit comment la compilation va se  faire
## gitignore  (git statut) 
## editorconfig  : permet de formater le code source d'une certaine manière. Harmonize l'indentation par exemple (extension: editorconfig.exe) 
## src le dossier dans lequel on va travailler. c'est là que tout s'opère.

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


le décorateur @component marque la classe attachée comme étant un composant angular.Iil prend comme paramètre un objet.

{
    selector: définit la balisie html à utiliser pour appeler le composant dans une   vue. Par défaut, angular prefix un "app-" en plus du nom du composant.
    Mes ça peut être changé

    templateUrl: définit où se trouve la "VUE" du composant,

    styleUrls: définit où se trouvent les fichiers de style (.css)
}

## création manuelle d'un composant

lorsqu'on cré un composant manuellement il faut le déclarer dans le composant de base app.module.ts dans la partie déclaration

## notre app

le mot clé "export" devant un class : permet de définir la class en module

le fichier mock-albums.ts
la création des module Album et list dans notre composant album.ts

installation de boostrap: npm i bootstrap et ajout le lien du css min dans dist dans la propriété style dans angular.json

installation de l'extension "anglar language Service"


## directive v-for en typeScrip
  *ngFor="let album of albums"
  *ngIf="album.like"
  <ng-template [ngIf]="album.like"></ng-template>


## passage d'élement d'un parent à un enfant

les Inpout et les output 

la communication entre deux élément:
  aller au niveau de l'enfant
    partie-TypeScript: 
      dans la class @Input() album!: Album; 
      onChange
      !: opérateur de confiance

      [ngClass]="{'bg-primary' : isOdd, 'bg-success': isEven}"


## CommonModule
  dans app.module/@ngModule


## Envoie d'information de l'enfant au parent
 @Output
 emit
@click ===> (click) en angular
