import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentPopComponent } from 'src/app/student/student-pop/student-pop.component';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent {
subject:any=new FormGroup({sub:new FormControl('',[Validators.required])});
condition:any;
constructor(private subjectservice:SubjectService,public dialogRef:MatDialogRef<StudentPopComponent>){};
onSaved(){
this.condition=true
if(this.subject.valid){
  this.subjectservice.subjectSave(this.subject.value).subscribe((value:any)=>{
    this.dialogRef.close(this.subject.value);
  });
  }
}
}
