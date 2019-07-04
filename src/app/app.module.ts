import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminRoutingModule } from './pages/admin/admin-routing.module';
import { AdminModule } from './pages/admin/admin.module';
import { TuitionRoutingModule } from './pages/tuition/tuition-routing.module';
import { TuitionModule } from './pages/tuition/tuition.module';
import { UsersRoutingModule } from './pages/users/users-routing.module';
import { UsersModule } from './pages/users/users.module';
import { BookstoresModule } from './pages/bookstores/bookstores.module';
import { BookstoresRoutingModule } from './pages/bookstores/bookstores-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BackToTopComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

    AdminModule,
    AdminRoutingModule,
    BookstoresModule,
    BookstoresRoutingModule,
    UsersModule,
    UsersRoutingModule,
    TuitionModule,
    TuitionRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
