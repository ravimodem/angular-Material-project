import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Data, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errormessage: any;
  constructor(private router: Router,
               private spinner: NgxSpinnerService,
               private toastr: ToastrService) { }
  name = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]);
  cpassword = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])

  matcher = new ErrorStateMatcher();

  login() {
    const Data = [this.name.value, this.email.value, this.password.value, this.cpassword.value];
    const cpass = this.password.value === this.cpassword.value;
    if (cpass) {
      this.toastr.error('Register Faild please contecr admin','register Failed',{
        timeOut: 3000,
      } );
      this.spinner.show();
          setTimeout(() => {
            this.router.navigate(["login"]);
            this.spinner.hide();
          }, 5000);
      Data.values.arguments.reset();
    }
    else {
      this.errormessage = "confirm password or mis matched";
    }

  }

}
