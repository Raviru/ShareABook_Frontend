import { BookDetailsService } from './../../../services/book-details.service';
import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-u-dashboard',
  templateUrl: './u-dashboard.component.html',
  styleUrls: ['./u-dashboard.component.css']
})
export class UDashboardComponent implements OnInit {
  bookDetails$: any = [];
  searchText = null ;
  modalService: any;

  constructor(
    private bookdetailService: BookDetailsService,
    public ngxSmartModalService: NgxSmartModalService,
    // private toastCtrl: ToastrService,
  ) { }

  ngOnInit() {
    this.loadAllBookDetails();
  }

  loadAllBookDetails() {
    this.bookdetailService.getBookDetails().subscribe( res => {
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

  openModal(book) {

    this.ngxSmartModalService.setModalData(book, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
    this.modalService = this.ngxSmartModalService.getModal('myModal').onAnyCloseEvent.subscribe(
      () => {
        this.ngxSmartModalService.resetModalData('myModal');
      }
    );
  }

  closeModal() {
    this.ngxSmartModalService.close('myModal');
  }

}
