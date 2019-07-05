import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-menubar',
  templateUrl: './u-menubar.component.html',
  styleUrls: ['./u-menubar.component.css']
})
export class UMenubarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

  logout() {
    this.route.navigate(['/home']);
  }
}
