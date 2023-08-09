import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentaddComponet } from './student/student-add/student-add.component';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher/teacher-list.component';

const routes: Routes = [
  {path:"",component:AppComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:"dasboard",component:DasboardComponent},
    {path:"student",component:StudentaddComponet},
    {path:"teacher/add",component:TeacherAddComponent},
    {path:"edit/:id",component:TeacherAddComponent},
    {path:"list",component:TeacherListComponent}

  ]},
    {path:"login",component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
