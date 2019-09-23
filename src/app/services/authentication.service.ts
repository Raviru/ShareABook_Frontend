import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/authentication/register', user);
  }

  bookstore(user) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/admin/bookshop/register', user);
  }

  item(book) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/book/add', book);
  }

  login(user) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/authentication/login', user);
  }
}
