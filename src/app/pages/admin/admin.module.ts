import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AProfileComponent } from './a-profile/a-profile.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { RegisterBComponent } from './register-b/register-b.component';
import { ListBookstoresComponent } from './manage-b/list-bookstores.component';
import { ListBooksComponent } from './manage-book/list-books.component';

@NgModule({
  declarations: [
    ADashboardComponent,
    AProfileComponent,
    RegisterBComponent,
    ListBookstoresComponent,
    ListBooksComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    ADashboardComponent,
    AProfileComponent,
  ],

})
export class AdminModule { }
