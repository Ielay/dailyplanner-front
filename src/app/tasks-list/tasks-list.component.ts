import { TaskService } from './task.service';
import { Task } from './task.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  public removeItem(taskIdx: number) {
    console.log(`Idx: ${taskIdx}`);

    this.taskService.removeTask(this.tasks[taskIdx].taskId)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
