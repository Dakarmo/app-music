import { Component, EventEmitter, Input, OnChanges, Output,  OnInit} from '@angular/core';
import { Album, List } from '../album';
import { AlbumService } from '../services/album.service';
import {  ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnChanges, OnInit {
  @Input() album!: Album;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();


  albumLists!: List[];
  songs: string[] | undefined = [];


  constructor(private AlbumService : AlbumService){

  }
  /****
   * ngOnInit : se lance une fois à l'initialisation du composant
   */

  ngOnInit(): void {

  }

  /****
   *
   * ngOnChanges se lance :
   * - une fois à l'initialisation du composant
   * - dès que quelques chose "rentre" dans ce composant via une propriété
   * - via un décorateur "@Input"
   */
  ngOnChanges(): void {
      // on vérifie que l'on a bien cliqué sur un album
      // avant de rechercher dans la liste des chansons

      if(this.album){


        this.songs = this.AlbumService.getAlbumList(this.album.id)?.list;
        // console.log(this.songs);
      }
  }
  //Input: parent ==> enfant
  //Output enfant ==> parent

  play(album: Album){
   this.onPlay.emit(album); //Emettre
  }
}
