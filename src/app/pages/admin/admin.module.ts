import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AdminRoutingModule } from './admin-routing.module';
import { AProfileComponent } from './a-profile/a-profile.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { RegisterBComponent } from './register-b/register-b.component';
import { ListBooksComponent } from './manage-book/list-books.component';
import { ListBookstoresComponent } from './manage-bookstores/list-bookstores.component';
import { ListUsersComponent } from './manage-users/list-users.component';

@NgModule({
  declarations: [
    ADashboardComponent,
    AProfileComponent,
    RegisterBComponent,
    ListBooksComponent,
    ListBookstoresComponent,
    ListUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    ADashboardComponent,
    AProfileComponent,
  ],

})
export class AdminModule { }
