import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services/admin.service';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-feedbacks',
  templateUrl: './list-feedbacks.component.html',
  styleUrls: ['./list-feedbacks.component.css']
})
export class ListFeedbacksComponent implements OnInit {
  feedbackDetails: any = [];

  constructor(
    private route: Router,
    private adminService: AdminService,
    // private toastCtrl: ToastrService,
  ) { }

  ngOnInit() {
    this.loadAllFeedbackDetails();
  }

  loadAllFeedbackDetails() {
    this.adminService.getFeedbacks().subscribe( res => {
      this.feedbackDetails = res;
      console.log(this.feedbackDetails);
    },
    error => {
      console.log(error);
      if (error.status === 0) {
        alert('Connection Error');
      }
    }
    );
  }
}
