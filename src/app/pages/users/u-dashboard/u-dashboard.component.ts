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
  public items: Item[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    // this.bookDetails = this.serachService.filter;
    this.searchService.findAll().subscribe(data => {
      this.items = data;
    });
  }

}
