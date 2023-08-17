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
    return this._albums.sort((a: Album, b: Album) => b.duration - a.duration);
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


  /***
   * Méthode qui renvoie le nombres d'albums
   * @returns le nombre totale d'albums
   *
   */
  count(): number {
    return this._albums.length;
  }

  /***
   * Méthode qui renvoie le nombres d'albums
   * @param start le nombre totale d'albums
   *
   */

  paginate(start: number, end: number): Album[] {

    return this._albums.slice(start, end);
  }

  /******
   *
   * Méthode qui recherche des albums dont le titre contient un mot recherché
   * 
   *
   */

  search(word: string): Album[] {
    return this._albums.filter(album => album.title.toLowerCase().includes(word.toLowerCase()));
  }
  
  search2(word: string): Album[] {
    const re = new RegExp(word.trim(), 'g');
    return this._albums.filter(album => album.title.match(re) && album.title.match(re)?.length);
  }

}
