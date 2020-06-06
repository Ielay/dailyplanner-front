import { AuthInterceptor } from './auth-interceptor';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskService } from './tasks-list/task.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AddTaskPageComponent } from './add-task-page/add-task-page.component';

const routes = [
  { path: '', component: LoginPageComponent},
  { path: 'logout', component: LogoutPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'tasks', component: TasksListComponent},
  { path: 'tasks/create', component: AddTaskPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    LoginPageComponent,
    LogoutPageComponent,
    RegisterPageComponent,
    AddTaskPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    UserService,
    // interceptor that sets the auth token
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
