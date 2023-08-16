import { Injectable } from '@angular/core';
import { Album, List } from '../album';
import { ALBUMS, ALBUM_LISTS } from '../mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _albums: Album[] = ALBUMS;
  private _albumList: List[] = ALBUM_LISTS;

  constructor() { }

  getAlbums(): Album[] {
    return this._albums;
  }



  getAlbum(id: string): Album | undefined {
    return this._albums.find(album => album.id === id);
  }

  /***
   * Méthode qui récupère la liste des chansons d'un album
   * @param id indentifiant de l'album à rechercher
   *
   */
  getAlbumList(id: string): List | undefined {
    return this._albumList.find(list => list.id === id);
  }
}
