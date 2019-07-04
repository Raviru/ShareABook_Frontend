import { AuthenticationService } from './../../../services/authentication.service';
import { passwordValidator } from 'src/app/validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-register',
  templateUrl: './u-register.component.html',
  styleUrls: ['./u-register.component.css']
})
export class URegisterComponent implements OnInit {
  types = ['Student', 'Educator'];
  submitted = false;

  constructor(private fb: FormBuilder,
              private route: Router,
              private _authService: AuthenticationService) {}

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  contactNumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  postalCodePattern = '^[0-9]{5}$';

  get userName() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get phone() {
    return this.registrationForm.get('phone');
  }
  get city() {
    return this.registrationForm.get('city');
  }
  get postalCode() {
    return this.registrationForm.get('postalCode');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get type() {
    return this.registrationForm.get('type');
  }
  get check1() {
    return this.registrationForm.get('check1');
  }
  get check2() {
    return this.registrationForm.get('check2');
  }

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: ['', Validators.pattern(this.contactNumPattern)],
    city: ['', Validators.required],
    postalCode: ['', Validators.pattern(this.postalCodePattern)],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required, passwordValidator]],
    type: ['', Validators.required],
    check1: [''],
    check2: ['true', Validators.requiredTrue]
  });

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return false;
    } else {
      this.route.navigate(['/user/u-dashboard']);
    }
    console.log(this.registrationForm.value);
    this._authService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    );
// if
}

  ngOnInit() {}
}
