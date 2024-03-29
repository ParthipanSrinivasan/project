import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule} from '@angular/forms';
import { StudentListComponet } from './student/student-list.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { StudentPopComponent } from './student/student-pop/student-pop.component';
import { HighlightDirective } from './highlight.directive';
import { TeacherAddComponent } from './teacher/teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher/teacher-list.component';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ClassListComponent } from './class/class-list.component';
import { ClassAddComponent } from './class/class-add/class-add.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { SubjectListComponent } from './subject/subject-list.component';
import { SubjectAddComponent } from './subject/subject-add/subject-add.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { BoostrapComponent } from './boostrap/boostrap.component';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    StudentListComponet,
    DasboardComponent,
    StudentPopComponent,
    HighlightDirective,
    TeacherAddComponent,
    TeacherListComponent,
    ClassListComponent,
    ClassAddComponent,
    SubjectListComponent,
    SubjectAddComponent,
    BoostrapComponent,
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
    MatDialogModule,
    NgFor,
    MatSelectModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTooltipModule,
    ClipboardModule,
    MatStepperModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
