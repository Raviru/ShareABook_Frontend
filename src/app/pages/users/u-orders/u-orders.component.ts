import { Component, OnInit } from '@angular/core';

import { BookDetailsService } from './../../../services/book-details.service';

@Component({
  selector: 'app-u-orders',
  templateUrl: './u-orders.component.html',
  styleUrls: ['./u-orders.component.css']
})
export class UOrdersComponent implements OnInit {
  defaultQuantity = 1;
  bookAddedToCart: any = [];
  allTotal: number;

  constructor(private bookDetailsService: BookDetailsService) { }

  ngOnInit() {
    this.bookAddedToCart = this.bookDetailsService.getBookFromCart();
    // tslint:disable-next-line:forin
    for (let i in this.bookAddedToCart) {
    this.bookAddedToCart[i].quantity = 1;
   }
    this.bookDetailsService.removeAllBooksFromCart();
    this.bookDetailsService.addBookToCart(this.bookAddedToCart);
    this.calculteAllTotal(this.bookAddedToCart);
  }

  loadCart() {
    const cart = localStorage.getItem('cartItem');
    console.log(cart);
    const u = JSON.parse(localStorage.getItem('userData'));

  }

  onAddQuantity(book) {
    // Get Book
    this.bookAddedToCart = this.bookDetailsService.getBookFromCart();
    this.bookAddedToCart.find(b => b.materialID === book.materialID).quantity = book.quantity + 1;
    this.bookDetailsService.removeAllBooksFromCart();
    this.bookDetailsService.addBookToCart(this.bookAddedToCart);
    this.calculteAllTotal(this.bookAddedToCart);
    // this.deliveryForm.controls.Amount.setValue(this.allTotal);
  }

  onRemoveQuantity(book) {
    this.bookAddedToCart = this.bookDetailsService.getBookFromCart();
    this.bookAddedToCart.find(b => b.materialID === book.materialID).quantity = book.quantity - 1;
    this.bookDetailsService.removeAllBooksFromCart();
    this.bookAddedToCart.addBookToCart(this.bookAddedToCart);
    this.calculteAllTotal(this.bookAddedToCart);
    // this.deliveryForm.controls['Amount'].setValue(this.allTotal);
  }

  calculteAllTotal(allBooks) {
    let total = 0;
    // tslint:disable-next-line:forin
    for (let i in allBooks) {
      total = total + (allBooks[i].quantity * allBooks[i].price);
    }

    this.allTotal = total;
  }

}
