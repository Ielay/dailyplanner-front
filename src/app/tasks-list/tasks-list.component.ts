import { TaskService } from './task.service';
import { Task } from './task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  public tasks: Array<Task>;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getAllTasks()
      .subscribe((tasks: Array<Task>) => this.tasks = tasks);
  }

  public removeItem(taskTitle: string) {
    this.taskService.removeTask(taskTitle);
  }
}
