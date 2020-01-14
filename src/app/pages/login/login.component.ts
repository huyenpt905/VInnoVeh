import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const phoneNumber = form.value.phoneNumber;
    const password = form.value.password;
 
    if(this.isLoginMode) {

    } else {
      this.authService.signup(phoneNumber, password).subscribe(
        resData => {
          console.log(resData);
        },
        error => {
          console.log(error);
        }
      );
    }

    form.reset();    
  }

}
