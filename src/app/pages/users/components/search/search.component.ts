import { SearchService } from './../../../../services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchTerm = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onClick() {
    console.log(this.searchTerm);
    this.searchService.search({
      queryParams: {searchTerm: this.searchTerm}
    }).subscribe(
      response => console.log('Success', response),
      error => console.error('Error', error)
    );
  }

}
