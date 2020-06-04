import { Task } from './task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';


@Injectable()
export class TaskService {

  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  // public getAllTasks(): Array<Task> {
  public getAllTasks() {
    return this.http.get(this.BASE_URL + '/task/all');
  }

  public removeTask(title: string): void {
    // this.tasks.splice(this.indexOfElemWithSpecifiedTitle(title), 1);
  }
}
