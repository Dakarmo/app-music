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

  onSelect(alb: Album) {
    // console.log("album dont on veux voirle détail", alb)
    this.selectedAlbum = alb;
  };
  constructor() {
    console.log(this.albums);

  };
}
