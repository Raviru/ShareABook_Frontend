import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  bookDetails: any = [];
  modalService: any;

  constructor(
    private route: Router,
    private adminService: AdminService,
    public ngxSmartModalService: NgxSmartModalService,
    // private toastCtrl: ToastrService,
  ) { }

  ngOnInit() {
    this.loadAllBookDetails();
  }

  loadAllBookDetails() {
    this.adminService.getBookDetails().subscribe( res => {
      this.bookDetails = res;
      console.log(this.bookDetails);
    },
    error => {
      console.log(error);
      if (error.status === 0) {
        alert('Connection Error');
      }
    }
    );
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
