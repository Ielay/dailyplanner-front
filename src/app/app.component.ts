import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    isUserLoggedIn: boolean;

    constructor(private userService: UserService) {
        this.isUserLoggedIn = this.userService.isLoggedIn();
    }
}
