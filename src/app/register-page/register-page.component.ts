import { UserService } from './../user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  registerFormControl: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    // passwordConfirmation: new FormControl('', Validators.required)
  }
  // , this.checkPasswords
  );

  constructor(private userService: UserService,
              private router: Router) { }

  // checkPasswords(form: FormGroup) {
  //   const pass = form.get('password').value;
  //   const confirmPass = form.get('passwordConfirmation').value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['tasks']);
    }
  }

  public onRegisterClick() {
    if (this.registerFormControl.invalid) {
      return;
    }

    const newUser = new User();
    // shitty decision to call db field as 'nickname'
    newUser.nickname = this.registerFormControl.value.username;
    newUser.email = this.registerFormControl.value.email;
    newUser.password = this.registerFormControl.value.password;

    this.userService.register(newUser);
  }
}
