import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {

  public bookDetails = [];

  constructor(private serachService: SearchService) { }

  ngOnInit() {
    // this.bookDetails = this.serachService.filter;
  }

}
