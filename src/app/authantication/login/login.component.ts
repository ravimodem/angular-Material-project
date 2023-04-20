import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient,
              private router: Router,
              private spinner: NgxSpinnerService,
              private toastr: ToastrService ) { }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);

  matcher = new ErrorStateMatcher();

  submit() {
    this.http.get<any>("assets/loginData.json")
      .subscribe((res:any)=> {
        const user = res.find((a: any) => {
          return a.email === this.email.value && a.password === this.password.value
        });
        if (user) {
          this.toastr.success('Page is redirect to Dashboard','Login Succesfully',{
            timeOut: 3000,
          } );
          this.spinner.show();
          setTimeout(() => {
            this.router.navigate(["maindashborad/sidenav"]);
            this.spinner.hide();
          }, 5000);
          
        } else {
          this.toastr.warning('please check once','user not found',{
            timeOut: 3000,
          } );
        }
      }, (err:any) => {
        
        this.toastr.error('please check once','Something went wrong',{
          timeOut: 3000,
        } );
      })

  }
 
}
