import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.css']
})
export class UNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  // logout
  logout() {
    this.router.navigate(['/home']);
  }
}

