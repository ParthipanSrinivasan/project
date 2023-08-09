import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { TeacherComponent } from './teacher/teacher.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path:"",component:AppComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:"dasboard",component:DasboardComponent},
    {path:"student",component:StudentdetailsComponent},
    {path:"teacher/add",component:TeacherComponent},
    {path:"edit/:id",component:TeacherComponent},
    {path:"list",component:ListComponent}

  ]},
    {path:"login",component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
