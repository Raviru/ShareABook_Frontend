import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-b',
  templateUrl: './register-b.component.html',
  styleUrls: ['./register-b.component.css']
})
export class RegisterBComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

      bookstoreRegistrationForm = this.fb.group({
        bookstoreName: [''],
        regNumber: [''],
        email: [''],
        contactNumber: [''],
        managerName: [''],
        managerNIC: [''],
        address: [''],
        city: [''],
        state: [''],
        postalCode: [''],
        userName: [''],
        password: [''],
      });

  ngOnInit() {
  }

}
