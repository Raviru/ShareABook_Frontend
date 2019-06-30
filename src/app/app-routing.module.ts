import { BookstoresModule } from './pages/bookstores/bookstores.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminModule } from './pages/admin/admin.module';
import { UsersModule } from './pages/users/users.module';
import { TuitionModule } from './pages/tuition/tuition.module';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path: 'admin', loadChildren: () => AdminModule },
  {path: 'bookstores', loadChildren: () => BookstoresModule },
  {path: 'tuition', loadChildren: () => TuitionModule },
  {path: 'users', loadChildren: () => UsersModule },

  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
