import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentListComponet } from '../student-list.component';
import { Router } from '@angular/router';
import { ClassServicsService } from 'src/app/class/class-servics.service';
import { MatDialog } from '@angular/material/dialog';
import { ClassAddComponent } from 'src/app/class/class-add/class-add.component';
import * as moment from 'moment';
import { SubjectAddComponent } from 'src/app/subject/subject-add/subject-add.component';
import { SubjectService } from 'src/app/subject/subject.service';

@Component({
  selector: 'app-student-pop',
  templateUrl: './student-pop.component.html',
  styleUrls: ['./student-pop.component.css'],
  
})
export class StudentPopComponent implements OnInit{
  constructor(private studentservice:StudentService,@Inject(MAT_DIALOG_DATA) public data: StudentListComponet,private router:Router,public classservice:ClassServicsService,public matDialog:MatDialog,
  public subjectService:SubjectService){
    
  }
  update=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  date:new FormControl(),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl('',[Validators.required]),
  id:new FormControl(''),
  gender:new FormControl(''),
  });
  errormessage:any=''
  condition:any=false;
  classadd:any;
  subjects:any
  genders:any=["male","female"]
  ngOnInit() {
    this.classMethod();
    this.subjectMethod();
    if(this.data!=null){
      this.studentservice.dialogComponent(this.data).subscribe((value:any)=>{
        this.update.patchValue(value);
      },error=>{
        this.errormessage=error.error;
      })
    }
  }
  onUpdate(){
    this.condition=true;
    if(this.update.valid){
      const dateChange=this.update.value;
      dateChange["date"]=this.datePicker(dateChange.date);
      this.studentservice.studentEditSave(dateChange).subscribe((value:any)=>{
        this.router.navigate(['/student/list']);
      },(error:any)=>{
        this.errormessage=error.error;
      })
    }
    return;
  }
  create(){
    this.condition=true;
    if(this.update.valid){
      const dateChange:any=this.update.value;
      dateChange["date"]=this.datePicker(dateChange.date);
      dateChange["class_id"]=this.classadd.class_id;
      this.studentservice.dialogCreate(dateChange).subscribe(value=>{
        this.router.navigate(['/student/list']);
      });
      return;
     }
  }
  open(){
    const def=this.matDialog.open(ClassAddComponent,{height:"35%",width:"30%",disableClose: true}
    );
    def.afterClosed().subscribe((val:any)=>{
      if(val!=""){
        this.update.controls["class"].setValue(val.value);
        this.classMethod();
      }
    });
  }
  classMethod(){
    this.classservice.classShow().subscribe((val:any)=>{
      this.classadd=val;
    })
  }
  datePicker(date:any){
    try {
      const myDate = moment(date,"MMM-DD-YYYY").format('DD-MM-YYYY');
      return myDate;
    } catch(e) {
      console.log(e)
      return e; 
    }
  }
  subjectDialog(){
    const def=this.matDialog.open(SubjectAddComponent,{height:"35%",width:"30%"});
    def.afterClosed().subscribe((val:any)=>{
      if(val!=""){
        this.update.controls["sub"].setValue(val.sub);
        this.subjectMethod();
      }
    })
  }
  subjectMethod(){
    this.subjectService.showSubjectTable().subscribe((val:any)=>{
      this.subjects=val;
    });
  }
  
}
