import { Component } from '@angular/core';
import { ClassServicsService } from '../class-servics.service';
import { FormControl, FormGroup, Validators,FormArray,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentPopComponent } from 'src/app/student/student-pop/student-pop.component';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent {
  condition:any;
  constructor(public classService:ClassServicsService,private router:Router,private dialogRef: MatDialogRef<StudentPopComponent>,private formBuilder: FormBuilder,private studentService:StudentService){}
  classadd:FormGroup=this.formBuilder.group({value:"",student:this.formBuilder.array([])});
  genders:any=["male","female"];
  countryno:any=['+91',"+234","+1","+82"]
  addclass:any;
  ngOnInit(){
    console.log(this.classService)
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
      class:""
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
      this.studentService.classStudentAdd(this.classadd.value).subscribe((value:any)=>{
        console.log(value);
      });
      this.classService.classAdd(this.classadd.value).subscribe((value:any)=>{
        this.dialogRef.close(this.classadd.value);
      })
    }
  }
}
