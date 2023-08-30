import { Component } from '@angular/core';
import { ClassServicsService } from '../class-servics.service';
import { FormGroup,FormArray,FormBuilder, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentPopComponent } from 'src/app/student/student-pop/student-pop.component';
import { StudentService } from 'src/app/student/student.service';
import * as moment from 'moment';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent {
  condition:any;
  constructor(public classservice:ClassServicsService,private router:Router,private dialogRef: MatDialogRef<StudentPopComponent>,private formBuilder: FormBuilder,private studentService:StudentService){}
  classadd:FormGroup=this.formBuilder.group({value:new FormControl('', [Validators.required]),student:this.formBuilder.array([])});
  genders:any=["male","female"];
  countryno:any=['+91',"+234","+1","+82"]
  classdropdown:any
  ngOnInit(){
    this.classMethod();
  }
  get student() : FormArray {
    return this.classadd.get("student") as FormArray
  }
  newStudent(): FormGroup {
    return this.formBuilder.group({
      firstname: '',
      lastname:"",
      age:"",
      date:"",
      phone:"",
      gender:"",
      num:"",
      class_id:""
    })
  }
  addStudent() {
  this.student.push(this.newStudent());
}
removeStudent(i:number) {
  this.student.removeAt(i);
}
onSaved(){
    this.condition=true;
    if(this.classadd.valid){
      const date=this.classadd.value
      for(let i=0;i<date.student.length;i++){
        date.student[i]["date"]=this.datePicker(date.student[i].date)
      }
      this.studentService.classStudentAdd(date).subscribe((value:any)=>{
        console.log(value);
      });
      this.classservice.classAdd(this.classadd.value).subscribe((value:any)=>{
        this.dialogRef.close(this.classadd.value);
      })
    }
  }
  datePicker(date:any){
    try {
      const myDate = moment(date,"MMM-DD-YYYY").format('YYYY-MM-DD');
      return myDate;
    } catch(e) {
      return e; 
    }
  }
  classMethod(){
    this.classservice.classShow().subscribe((val:any)=>{
      this.classdropdown=val;
    });
  }
}
