import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SecondSeriviceService } from '../second-serivice.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
teacher:any=new FormGroup({firstname:new FormControl(''),
lastname:new FormControl(''),
class:new FormControl(''),
id:new FormControl('')
});
condition:any=false
errormessage:any=""
  constructor(private route:ActivatedRoute,public secondservice:SecondSeriviceService){}
ngOnInit(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.secondservice.idValueGet(id).subscribe((value)=>{
        this.teacher.patchvalue(value);
      },error=>{
        this.errormessage=error.error;
      })
    });
}
  editSaved(){
    this.condition=true
    if(this.teacher.valid){
      this.secondservice.updateTeacher(this.teacher.value).subscribe(val=>{

      },error=>{
        this.errormessage=error.error;
      });
    }
  }
}
