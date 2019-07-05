import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(Key: any){
    return this.http.post<any>('http://localhost:8080/shareabook/api/v1/book/search/all', Key);
  }

  filter(book) {
    return this.http.get<any>('http://localhost:8080/shareabook/api/v1/admin/book/search/all', book);
  }
}
