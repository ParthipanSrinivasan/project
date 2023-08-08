import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { EditTableComponent } from './edit-table/edit-table.component';
import { HighlightDirective } from './highlight.directive';
import { TeacherComponent } from './teacher/teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentdetailsComponent,
    DasboardComponent,
    EditTableComponent,
    HighlightDirective,
    TeacherComponent,
    EditTeacherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
