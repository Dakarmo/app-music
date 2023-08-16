import { Component } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  titlePage: string = "Page Principale Albums Music";
  albums :Album[] = ALBUMS;
  selectedAlbum!: Album;
  /*** Variable qui gère l'affichage des caractère (ou icons) **** */
  status: string | undefined = undefined;

  onSelect(alb: Album) {
    // console.log("album dont on veux voirle détail", alb)
    this.selectedAlbum = alb;
  };
  constructor() {
    console.log(this.albums);

  };

  playAlbum(a: Album) {
    this.status = a.id;
  };
}
