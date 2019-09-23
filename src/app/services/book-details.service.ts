import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor(private http: HttpClient) { }

  getBookDetails() {
    return this.http.get('http://localhost:8080/shareabook/api/v1/book/all');
  }

  addBook(add) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/book/add', add);
  }
}
