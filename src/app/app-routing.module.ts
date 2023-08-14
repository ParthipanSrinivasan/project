import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthguardGuard } from './authguard.guard';
import { DasboardComponent } from './dasboard/dasboard.component';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher/teacher-list.component';
import { StudentListComponet } from './student/student-list.component';
import { ClassAddComponent } from './class/class-add/class-add.component';
import { ClassListComponent } from './class/class-list.component';

const routes: Routes = [
  {path:"",component:DasboardComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:"student/list",component:StudentListComponet},
    {path:"teacher/add",component:TeacherAddComponent},
    {path:"teacher/edit/:id",component:TeacherAddComponent},
    {path:"teacher/list",component:TeacherListComponent},
    {path:"class/add",component:ClassAddComponent},
    {path:"class/list",component:ClassListComponent}
  ]},
    {path:"login",component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
