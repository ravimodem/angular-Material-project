import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(private spinner: NgxSpinnerService,
               private toastr: ToastrService,
               private router: Router) {}

  ngOnInit() {
 
    
  }
 
  logout(){
    this.toastr.success('Page is redirect to login page','Logout Succesfully',{
      timeOut: 3000,
    } );
   this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(["login"]);
    }, 5000);
  }
  }


