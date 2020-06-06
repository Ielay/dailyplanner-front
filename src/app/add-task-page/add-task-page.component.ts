import { TaskService } from './../tasks-list/task.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../tasks-list/task.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {

  taskFormControl: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService,
              private taskService: TaskService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['']);
    }
  }

  public onTaskCreatePlicked() {
    if (this.taskFormControl.invalid) {
      window.alert('You should fill in all input fields');
      return;
    }

    const newTask = new Task(this.taskFormControl.value.title);
    newTask.done = false;
    // TODO: fake value, should provide normal way to inputting deadline date
    newTask.deadline = 123;

    this.taskService.addTask(newTask)
      .subscribe(() => {
        this.router.navigate(['tasks']);
      });
  }

}
