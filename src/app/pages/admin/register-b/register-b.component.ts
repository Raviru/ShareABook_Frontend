import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-b',
  templateUrl: './register-b.component.html',
  styleUrls: ['./register-b.component.css']
})
export class RegisterBComponent implements OnInit {
  submitted = false;

  constructor(private fb: FormBuilder, private route: Router) {}

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  contactNumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  postalCodePattern = '^[0-9]{5}$';

  get bookstoreName() {
    return this.bookstoreRegistrationForm.get('bookstoreName');
  }
  get regNumber() {
    return this.bookstoreRegistrationForm.get('regNumber');
  }
  get email() {
    return this.bookstoreRegistrationForm.get('email');
  }
  get contactNumber() {
    return this.bookstoreRegistrationForm.get('contactNumber');
  }
  get managerName() {
    return this.bookstoreRegistrationForm.get('managerName');
  }
  get managerNIC() {
    return this.bookstoreRegistrationForm.get('managerNIC');
  }
  get address() {
    return this.bookstoreRegistrationForm.get('address');
  }
  get city() {
    return this.bookstoreRegistrationForm.get('city');
  }
  get state() {
    return this.bookstoreRegistrationForm.get('state');
  }
  get postalCode() {
    return this.bookstoreRegistrationForm.get('postalCode');
  }
  get userName() {
    return this.bookstoreRegistrationForm.get('userName');
  }
  get password() {
    return this.bookstoreRegistrationForm.get('password');
  }

  bookstoreRegistrationForm = this.fb.group({
    bookstoreName: ['', Validators.required],
    regNumber: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    contactNumber: ['', [Validators.required, Validators.pattern(this.contactNumPattern)]],
    managerName: ['', Validators.required],
    managerNIC: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.pattern(this.postalCodePattern)],
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookstoreRegistrationForm.invalid) {
      return;
  }

    alert('Registration Successful!! :-)\n\n' + JSON.stringify(this.bookstoreRegistrationForm.value));
    this.route.navigate(['/admin/a-dashboard']);
}
  
ngOnInit() {}
}
