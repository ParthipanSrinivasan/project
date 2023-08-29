import { Component } from '@angular/core';
import { ClassServicsService } from '../class-servics.service';
import { FormControl, FormGroup, Validators,FormArray,FormBuilder } from '@angular/forms';
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
  constructor(private classService:ClassServicsService,private router:Router,private dialogRef: MatDialogRef<StudentPopComponent>,private formBuilder: FormBuilder){}
  classadd:FormGroup=this.formBuilder.group({value:"",skills:this.formBuilder.array([])});
  ngOnInit(){
    console.log(this.skills.controls)
  }
  get skills() : FormArray {
    return this.classadd.get("skills") as FormArray
  }
  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: ''
    })
  }
  addSkills() {
  this.skills.push(this.newSkill());
}
removeSkill(i:number) {
  this.skills.removeAt(i);
}
  onSaved(){
    this.condition=true;
    if(this.classadd.valid){
      this.classService.classAdd(this.classadd.value).subscribe((value:any)=>{
        this.dialogRef.close(this.classadd.value);
      })
    }
  }
}
