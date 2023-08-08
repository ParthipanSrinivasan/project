import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes: Routes = [
  {path:"",component:AppComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:"dasboard",component:DasboardComponent},
    {path:"student",component:StudentdetailsComponent},
    {path:"teacher",component:TeacherComponent},
    {path:"edit/:id",component:EditTableComponent}

  ]},
    {path:"login",component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
