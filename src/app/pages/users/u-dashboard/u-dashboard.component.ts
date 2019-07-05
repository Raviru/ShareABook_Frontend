import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Item } from 'src/app/pages/users/classes/item';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {
  /* public bookDetails = []; */
  public searchTerm = '';
  public items: Item[];

  constructor(private searchService: SearchService) { }

  onClick() {
    console.log(this.searchTerm);
    this.searchService.search({
      queryParams: {searchTerm: this.searchTerm}
    }).subscribe(
      response => console.log('Success', response),
      error => console.error('Error', error)
    );
    this.searchService.findAll().subscribe(data => {
      this.items = data;
    });
  }

  ngOnInit() {
    // this.bookDetails = this.serachService.filter;
  }

}
