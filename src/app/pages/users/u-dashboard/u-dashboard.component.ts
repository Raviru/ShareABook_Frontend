import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {
  bookDetails$;

  constructor(private bookdetailService: BookDetailsService) {
    this.bookDetails$ = this.bookdetailService.getBookDetails();
   }

   filter(query: string) {
      console.log(query);
   }

  ngOnInit() {
    // this.bookDetails = this.serachService.filter;
  }

}
