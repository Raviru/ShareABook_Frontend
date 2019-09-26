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

  getMyUploads(user) {
    return this.http.post('http://localhost:8080/shareabook/api/v1/book/myuploads', user);
  }

  addBook(add) {
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/book/add', add);
  }

  addBookToCart(book) {
    // console.log(book);
    // localStorage.getItem(book);
    localStorage.setItem('book', JSON.stringify(book));
  }

  getBookFromCart() {
    return JSON.parse(localStorage.getItem('book'));
  }

  removeAllBooksFromCart() {
    return localStorage.removeItem('book');
  }

}
