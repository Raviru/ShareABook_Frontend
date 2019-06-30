import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BookstoresRoutingModule } from './bookstores-routing.module';
import { BProfileComponent } from './b-profile/b-profile.component';
import { BDashboardComponent } from './b-dashboard/b-dashboard.component';
import { BRegisterComponent } from './b-register/b-register.component';


@NgModule({
  declarations: [
    BDashboardComponent,
    BProfileComponent,
    BRegisterComponent
  ],
  imports: [
    CommonModule,
    BookstoresRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    BDashboardComponent,
    BProfileComponent,
    BRegisterComponent,
  ],

})
export class BookstoresModule { }
