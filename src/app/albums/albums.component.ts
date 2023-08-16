import { Component, OnInit} from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../services/album.service';

import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  titlePage: string = "Page Principale Albums Music";
  albums!: Album[] ;
  selectedAlbum!: Album;
  /*** Variable qui gère l'affichage des caractère (ou icons) **** */
  status: string | undefined = undefined;

 // injection du service
 constructor(private AlbumService: AlbumService) {};


  /********
   *
   * Un servuce est une classe réutilisable qui offre une fonctionnalité
   * sépécifique. On les utilise pour gérer la logique métier, les apples
   * HTTP, la gestion des états, la communication entre les composants...
   *
   * *****/
  ngOnInit(): void {
    this.albums = this.AlbumService.getAlbums();
  }

  onSelect(alb: Album) {
    // console.log("album dont on veux voirle détail", alb)
    this.selectedAlbum = alb;
  };


  playAlbum(a: Album) {
    this.status = a.id;
  };
}
