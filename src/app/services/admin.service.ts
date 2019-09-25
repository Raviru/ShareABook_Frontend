import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getBookstores() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/admin/user/bookshop');
  }

  getTuitionproviders() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/admin/user/tuition');
  }

  getUsers() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/admin/user/student');
  }

  getFeedbacks() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/admin/user/feedback');
  }

  getBookDetails() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/book/all');
  }

}
