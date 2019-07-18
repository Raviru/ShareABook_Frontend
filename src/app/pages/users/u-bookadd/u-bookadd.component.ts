import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../services/authentication.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

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
              private authService: AuthenticationService) {}

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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookAddForm.invalid) {
        return false;
    }

    this.route.navigate(['/users/u-catalogue']);

    console.log(this.bookAddForm.value);
    this.authService.item(this.bookAddForm.value)
    .subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    );
// if
}

  ngOnInit() {}
}

