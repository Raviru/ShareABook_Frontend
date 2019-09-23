import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { first } from 'rxjs/operators';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    // private toastCtrl: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit() {
    console.log('Submitted');
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('Invalid');
      return;
    }

    this.authService.login(this.loginForm.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        if (data == null) {
          console.log('Invalid');
          //   this.toastCtrl.error('Invalid Login', 'Login Failed');
          return;
        } else {
          if (data.type === 'student') {
          this.router.navigate(['/users/u-dashboard']);
          } else if (data.type === 'admin') {
          this.router.navigate(['/admin/a-dashboard']);
          } else if (data.type === 'bookshop_owner') {
          this.router.navigate(['/bookstores/b-dashboard']);
          }
        }
      },
      error => {
        console.log(error);
        // if (error.status === 400) {
        //   console.log('Invalid Login');
        //   this.toastCtrl.error('Invalid Login', 'Login Failed');
        // } else if (error.status === 401) {
        //   this.toastCtrl.error('Please Check Your Email For Email Verification', 'Invalid Login');
        // } else {
        //   console.log('Server Error');
        //   this.toastCtrl.error('Server Error', 'Login Failed');
        // }
      }
    );
  }

}
