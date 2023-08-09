import { Component,OnInit } from '@angular/core';
import { SecondSeriviceService } from '../../second-serivice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router} from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
teacher:any=new FormGroup({firstname:new FormControl('',[Validators.required]),
lastname:new FormControl('',[Validators.required]),
class:new FormControl('',[Validators.required]),
id:new FormControl('')
});
condition:any=false;
errormessage:any="";
val1:any=true;
val2:any=false;
constructor(private route:ActivatedRoute,private secondservice:SecondSeriviceService,private router:Router){}
ngOnInit(){
  this.route.params.subscribe(params=>{
    let id = params['id'];
    if(typeof params['id']!=undefined){
      this.secondservice.idValueGet(id).subscribe((value:any)=>{
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
    this.secondservice.teacherSaved(this.teacher.value).subscribe((value:any)=>{
      this.router.navigate(['/list']);
    })
  }
  }
  editSaved(){
   if(this.teacher.valid){
    this.condition=true
    if(this.teacher.valid){
      this.secondservice.updateTeacher(this.teacher.value).subscribe(val=>{
        this.router.navigate(['/list']);
      },error=>{
        this.errormessage=error.error;
      });
    }
   }
  }
}
