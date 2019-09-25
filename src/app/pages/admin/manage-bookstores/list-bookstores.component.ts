import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-list-bookstores',
  templateUrl: './list-bookstores.component.html',
  styleUrls: ['./list-bookstores.component.css']
})
export class ListBookstoresComponent implements OnInit {
  bookstoreDetails: any = [];
  modalService: any;

  constructor(
    private route: Router,
    private adminService: AdminService,
    public ngxSmartModalService: NgxSmartModalService,
    // private toastCtrl: ToastrService,
  ) { }

  ngOnInit() {
    this.loadAllBookstoreDetails();
  }

  loadAllBookstoreDetails() {
    this.adminService.getBookstores().subscribe( res => {
      this.bookstoreDetails = res;
      console.log(this.bookstoreDetails);
    },
    error => {
      console.log(error);
      if (error.status === 0) {
        alert('Connection Error');
      }
    }
    );
  }

  openModal(bookshop) {

    this.ngxSmartModalService.setModalData(bookshop, 'myModal');
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
