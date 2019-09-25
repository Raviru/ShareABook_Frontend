import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-u-bookadd',
  templateUrl: './u-bookadd.component.html',
  styleUrls: ['./u-bookadd.component.css']
})
export class UBookaddComponent implements OnInit {
  examTypes = ['O/L', 'A/L'];
  mediumTypes = ['Sinhala', 'English', 'Tamil', 'Other'];
  itemTypes = ['Reference Book', 'Past Papers', 'Short Note', 'Personal Note'];
  submitted = false;

  constructor(private fb: FormBuilder,
              private route: Router,
              private authService: AuthenticationService,
              private bookDetailsService: BookDetailsService) {}

  get bookName() {
    return this.bookAddForm.get('bookName');
  }
  get ISBN() {
    return this.bookAddForm.get('ISBN');
  }
  get author() {
    return this.bookAddForm.get('author');
  }
  get publisher() {
    return this.bookAddForm.get('publisher');
  }
  get copies() {
    return this.bookAddForm.get('copies');
  }
  get examType() {
    return this.bookAddForm.get('examType');
  }
  get subject() {
    return this.bookAddForm.get('subject');
  }
  get mediumType() {
    return this.bookAddForm.get('mediumType');
  }
  get itemType() {
    return this.bookAddForm.get('itemType');
  }
  get price() {
    return this.bookAddForm.get('price');
  }

  bookAddForm = this.fb.group({
    bookName: ['', Validators.required],
    ISBN: [''],
    author: [''],
    publisher: [''],
    copies: ['', Validators.min(0)],
    examType: ['', Validators.required],
    subject: ['', Validators.required],
    mediumType: ['', Validators.required],
    itemType: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]]
  });

  ngOnInit() {}

  onSubmit() {
    console.log('Submitted');
    this.submitted = true;
    const u = JSON.parse(localStorage.getItem('userData'));
    console.log(u);
    if (this.bookAddForm.invalid) {
      console.log('Invalid');
      return;
    }
    const book = this.bookAddForm.value;
    const user = u;
    const add = { book,
                  user};
    this.bookDetailsService.addBook(add)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.bookAddForm.value, u);
          // this.toastCtrl.success('Category is added Successfully');
          this.bookAddForm.reset();
          this.route.navigate(['/users/u-dashboard']);

        },
        error => {
          console.log(error);
          if (error.status === 400) {
            // this.toastCtrl.error('Cannot add category.\n' + error.error.message);
            console.log('Cannot add book.\n\' + error.error.message');
          } else {
            // this.toastCtrl.error('Server Error');
            console.log('Server Error');
          }
        }
      );
  }
}
