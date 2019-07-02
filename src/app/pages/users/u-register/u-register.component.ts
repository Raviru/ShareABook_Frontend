import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-u-register',
  templateUrl: './u-register.component.html',
  styleUrls: ['./u-register.component.css']
})
export class URegisterComponent implements OnInit {
  types = ['Student', 'Educator'];

  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    userName: [''],
    email: [''],
    phone: [''],
    city: [''],
    postalCode: [''],
    password: [''],
    confirmPassword: [''],
    type: [''],
    check1: [''],
    check2: ['']
  });

  ngOnInit() {}
}
