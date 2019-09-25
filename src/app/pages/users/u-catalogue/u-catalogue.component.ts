import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-u-catalogue',
  templateUrl: './u-catalogue.component.html',
  styleUrls: ['./u-catalogue.component.css']
})
export class UCatalogueComponent implements OnInit {
  bookDetails$: any = [];

  constructor(
    private route: Router,
    private bookdetailService: BookDetailsService
  ) {}

  onSubmit() {
    this.route.navigate(['/users/u-bookadd']);
  }


  ngOnInit() {
    this.loadAllCatalogueDetails();
  }

  loadAllCatalogueDetails() {
    const user = JSON.parse(localStorage.getItem('userData'));
    console.log(user);
    this.bookdetailService.getMyUploads(user).subscribe( res => {
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

  delete() {}
}
