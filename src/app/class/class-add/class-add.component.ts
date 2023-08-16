import { Component } from '@angular/core';
import { ClassServicsService } from '../class-servics.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentPopComponent } from 'src/app/student/student-pop/student-pop.component';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent {
  condition:any;
  classadd:any=new FormGroup({value:new FormControl("",[Validators.required])})
  constructor(private classService:ClassServicsService,private router:Router,private dialogRef: MatDialogRef<StudentPopComponent>){}
  onSaved(){
    this.condition=true;
    if(this.classadd.valid){
      this.classService.classAdd(this.classadd.value).subscribe((value:any)=>{
        this.dialogRef.close({ data:this.classadd.value });
      })
    }
  }
}
