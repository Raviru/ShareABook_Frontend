import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-u-navbar',
  templateUrl: './u-navbar.component.html',
  styleUrls: ['./u-navbar.component.css']
})
export class UNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    /*Search Bar*/
    $(function() {
      $('a[href="#search"]').on('click', function(event) {
          event.preventDefault();
          $('#search').addClass('open');
          $('#search > form > input[type="search"]').focus();
      });

      $('#search, #search button.close').on('click keyup', function(event) {
          if (event.target === this || event.target.className === 'close' || event.keyCode === 27) {
              $(this).removeClass('open');
          }
      });
  });

    /*Menu Icon*/
    $(document).ready(function() {
    $('.sidenav').sidenav();
  });
  }
  // logout
  logout() {
    this.router.navigate(['/home']);
  }
}

