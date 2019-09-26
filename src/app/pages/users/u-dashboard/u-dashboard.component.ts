import { SharedService } from './../../../services/shared.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { BookDetailsService } from './../../../services/book-details.service';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {
  bookDetails$: any = [];
  searchText = null;
  modalService: any;
  bookAddedToCart: any = [];
  cartItemCount = 0;
  @Output() cartEvent = new EventEmitter<number>();

  constructor(
    private bookdetailService: BookDetailsService,
    private sharedService: SharedService,
    public ngxSmartModalService: NgxSmartModalService
  ) // private toastCtrl: ToastrService,
  {}

  ngOnInit() {
    this.loadAllBookDetails();
  }

  loadAllBookDetails() {
    this.bookdetailService.getBookDetails().subscribe(
      res => {
        this.bookDetails$ = res;
        console.log(this.bookDetails$);
      },
      error => {
        console.log(error);
        if (error.status === 0) {
          alert('Connection Error');
        }
      }
    );
  }

  search(ev: any) {
    // console.log(ev.target.value);
    this.searchText = ev.target.value;
    // console.log(this.bookDetails$);
  }

  addToCart(book) {
    console.log(book);

    this.bookAddedToCart = this.bookdetailService.getBookFromCart();

    if (this.bookAddedToCart == null) {
      this.bookAddedToCart = [];
      this.bookAddedToCart.push(book);
      this.bookdetailService.addBookToCart(this.bookAddedToCart);
      console.log('Product succesfully added to the cart');
    } else {
      const tempProduct = this.bookAddedToCart.find(
        b => b.materialID === book.materialID
      );
      if (tempProduct == null) {
        this.bookAddedToCart.push(book);
        this.bookdetailService.addBookToCart(this.bookAddedToCart);
        console.log('Product succesfully added to the cart');
      } else {
        console.log('Product already exist in the cart');
      }
    }
    this.cartItemCount = this.bookAddedToCart.length;
    console.log(this.cartItemCount);

    this.sharedService.updateCartCount(this.cartItemCount);
    // this.cartEvent.emit(this.cartItemCount);

  }

  openModal(book) {
    this.ngxSmartModalService.setModalData(book, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
    this.modalService = this.ngxSmartModalService
      .getModal('myModal')
      .onAnyCloseEvent.subscribe(() => {
        this.ngxSmartModalService.resetModalData('myModal');
      });
  }

  closeModal() {
    this.ngxSmartModalService.close('myModal');
  }
}
