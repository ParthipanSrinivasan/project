import { Component,OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router} from '@angular/router';
@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
teacher:any=new FormGroup({firstname:new FormControl('',[Validators.required]),
lastname:new FormControl('',[Validators.required]),
class:new FormControl('',[Validators.required]),
gender:new FormControl(''),
id:new FormControl('')
});
condition:any=false;
errormessage:any="";
val1:any=true;
val2:any=false;
genders:any=["male","female"]
constructor(private route:ActivatedRoute,private teacherservice:TeacherService,private router:Router){}
ngOnInit(){
  this.route.params.subscribe(params=>{
    //let id = params['id'];
    if(typeof params['id']!=undefined){
      this.teacherservice.idValueGet(params['id']).subscribe((value:any)=>{
        this.teacher.patchValue(value);
        this.val1=false;
        this.val2=true;
      },error=>{
        this.errormessage=error.error;
      })
    }
  });
}
onSaved(){
this.condition=true
  if(this.teacher.valid){
    this.teacherservice.teacherSaved(this.teacher.value).subscribe((value:any)=>{
      this.router.navigate(['teacher/list']);
    })
  }
  }
  editSaved(){
   if(this.teacher.valid){
    this.condition=true
    if(this.teacher.valid){
      this.teacherservice.updateTeacher(this.teacher.value).subscribe(val=>{
        this.router.navigate(['teacher/list']);
      },error=>{
        this.errormessage=error.error;
      });
    }
   }
  }
}
