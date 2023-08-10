import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeroService } from '../first-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentListComponet } from '../student-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-table',
  templateUrl: './student-pop.component.html',
  styleUrls: ['./student-pop.component.css']
})
export class StudentPopComponent implements OnInit{
  constructor(public heroservice:HeroService,@Inject(MAT_DIALOG_DATA) public data: StudentListComponet,private router:Router){
  
  }
  update=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl('',[Validators.required]),
  id:new FormControl('')
  });
  errormessage:any=''
  condition:any=false;
  valu1:any=true;
  valu2:any=true;
  ngOnInit() {
    if(this.data!=null){
      this.heroservice.dialogComponent(this.data).subscribe((value:any)=>{
        this.update.patchValue(value);
        this.valu1=true;
        this.valu2=false;
      },error=>{
        this.errormessage=error.error;
      })
    }
    else{
      this.valu1=false;
        this.valu2=true;
    }
  }
  onUpdate(){
    this.condition=true;
    if(this.update.valid){
      this.heroservice.studentEditSave(this.update.value).subscribe((value:any)=>{
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
      this.heroservice.dialogCreate(this.update.value).subscribe(value=>{
        this.router.navigate(['/student/list']);
      });
      return;
     }
  }
}
