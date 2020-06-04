import { User } from './user.model';
import { LoginInfo } from './login-info.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  public register(newUser: User) {
    this.http.post(this.BASE_URL + '/user/login', newUser)
      .subscribe((token: string) => localStorage.setItem('DAILYPLANNER_ACCESS_TOKEN', token));
  }

  public login(loginInfo: LoginInfo) {
    this.http.post(this.BASE_URL + '/user/login', loginInfo, {responseType: 'text'})
      .subscribe((token: string) => localStorage.setItem('DAILYPLANNER_ACCESS_TOKEN', token));
  }

  public logout(): void {
    localStorage.removeItem('DAILYPLANNER_ACCESS_TOKEN');
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('DAILYPLANNER_ACCESS_TOKEN') != null) {
      return true;
    } else {
      return false;
    }
  }

  public getToken(): string {
    return localStorage.getItem('DAILYPLANNER_ACCESS_TOKEN');
  }
}
