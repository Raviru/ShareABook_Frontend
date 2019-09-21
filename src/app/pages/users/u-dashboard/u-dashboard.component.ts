import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {
  bookDetails$: any = [];
  searchText = null ;

  constructor(
              private bookdetailService: BookDetailsService) { }

  ngOnInit() {
    this.loadAllBookDetails();
  }

  loadAllBookDetails() {
    this.bookdetailService.getBookDetails().subscribe( res => {
      this.bookDetails$ = res;
      console.log(this.bookDetails$);
    },
    error => {
      console.log(error);
      if (error.status === 0) {
        alert('Connection Error');
      }
    }
    );
  }

  search(ev: any) {
    console.log(ev.target.value);
    this.searchText = ev.target.value;

    // console.log(this.bookDetails$);
  }

}
