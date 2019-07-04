import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {

  public bookDetails = [];

  constructor(private _bookDetailsService: BookDetailsService) { }

  ngOnInit() {
    this.bookDetails = this._bookDetailsService.getBookDetails();
  }

}
