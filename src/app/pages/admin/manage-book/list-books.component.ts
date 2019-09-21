import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/book.model';
 
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [
    {
      bookName: 'Masterguide-Physics for GCE A/L',
      ISBN: '8425679125',
      author: 'n/a',
      publisher: 'Godage',
      noOfCopies: 1,
      imagePath: 'assets/book.jpg',
      examType: 'A/L',
      subject: 'Physics',
      medium: 'Sinhala',
      itemType: 'Book',
      price: 450,
    },
    {
      bookName: 'My Tutor - Chemistry GCE A/L',
      ISBN: '8425679125',
      author: 'n/a',
      publisher: 'Godage',
      noOfCopies: 1,
      imagePath: 'assets/book.jpg',
      examType: 'A/L',
      subject: 'Chemistry',
      medium: 'English',
      itemType: 'Book',
      price: 450,
    },
    {
      bookName: 'Biology Past Papers 1990-2018',
      ISBN: '8425679125',
      author: 'n/a',
      publisher: 'Sarasavi',
      noOfCopies: 1,
      imagePath: 'assets/book.jpg',
      examType: 'A/L',
      subject: 'Biology',
      medium: 'Sinhala',
      itemType: 'Book',
      price: 450,
    },
    {
      bookName: 'Masterguide-Physics for GCE A/L',
      ISBN: '8425679125',
      author: 'n/a',
      publisher: 'Godage',
      noOfCopies: 1,
      imagePath: 'assets/book.jpg',
      examType: 'A/L',
      subject: 'Physics',
      medium: 'Sinhala',
      itemType: 'Book',
      price: 450,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
