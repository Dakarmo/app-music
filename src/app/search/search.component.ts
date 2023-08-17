import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  albums: Album[] = [];
  searchResults: Album[] = [];
  constructor(private albumService: AlbumService){
    
  }


  onSubmit(form: NgForm): void {
    // console.log(form.value['searchTerm']);
    // console.log(this.albumService.search(form.value['searchTerm']));
    this.searchResults = this.albumService.search(form.value['searchTerm']);
  }

  
}
