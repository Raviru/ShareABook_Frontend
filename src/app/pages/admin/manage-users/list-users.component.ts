import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userDetails: any = [];
  modalService: any;

  constructor(
    private route: Router,
    private adminService: AdminService,
    public ngxSmartModalService: NgxSmartModalService,
    // private toastCtrl: ToastrService,
  ) { }

  ngOnInit() {
    this.loadAllUserDetails();
  }

  loadAllUserDetails() {
    this.adminService.getUsers().subscribe( res => {
      this.userDetails = res;
      console.log(this.userDetails);
    },
    error => {
      console.log(error);
      if (error.status === 0) {
        alert('Connection Error');
      }
    }
    );
  }

  openModal(user) {

    this.ngxSmartModalService.setModalData(user, 'myModal');
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
