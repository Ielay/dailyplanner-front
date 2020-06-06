import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginFormControl: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['tasks']);
    }
  }

  public onLoginButtonPushed(): void {
    if (this.loginFormControl.invalid){
      window.alert('You should fill in all input fields');
      return;
    }

    this.userService.login(this.loginFormControl.value);

    // It should be in 'subscribe'

    // if (this.userService.isLoggedIn()) {
    //   this.router.navigate(['tasks']);
    // }
  }
}
