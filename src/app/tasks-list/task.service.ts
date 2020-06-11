import { Task } from './task.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user.service';


@Injectable()
export class TaskService {

  private BASE_URL = 'https://dry-everglades-24581.herokuapp.com/api';

  constructor(private http: HttpClient,
              private userService: UserService) { }

  public getAllTasks() {
    return this.http.get(this.BASE_URL + '/task/all');
  }

  public removeTask(taskId: number) {
    console.log(`Task id to remove: ${taskId}`);

    return this.http.delete(this.BASE_URL + `/task/${taskId}/delete`);
  }

  public updateDoneStatus(taskId: number, newDoneStatus: boolean) {
    console.log(`Task id to patch: ${taskId}`);

    const task: Task = new Task();
    task.done = newDoneStatus;


    return this.http.patch(
      this.BASE_URL + `/task/${taskId}`,
      task,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      }
    );
  }

  public addTask(newTask: Task) {
    return this.http.post(this.BASE_URL + '/task/add', newTask);
  }
}
