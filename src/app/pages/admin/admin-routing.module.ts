import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AProfileComponent } from './a-profile/a-profile.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { RegisterBComponent } from './register-b/register-b.component';
import { ListBooksComponent } from './manage-book/list-books.component';
import { ListBookstoresComponent } from './manage-bookstores/list-bookstores.component';
import { ListUsersComponent } from './manage-users/list-users.component';

const routes: Routes = [
  { path: 'a-profile', component: AProfileComponent },
  { path: 'a-dashboard', component: ADashboardComponent },
  { path: 'register-b', component: RegisterBComponent },
  { path: 'manage-book', component: ListBooksComponent },
  { path: 'manage-bookstores', component: ListBookstoresComponent },
  { path: 'manage-users', component: ListUsersComponent },

  {path: '**', redirectTo: 'a-dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
