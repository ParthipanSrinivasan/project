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

@Component({
  selector: 'app-student-pop',
  templateUrl: './student-pop.component.html',
  styleUrls: ['./student-pop.component.css']
})
export class StudentPopComponent implements OnInit{
  constructor(private studentservice:StudentService,@Inject(MAT_DIALOG_DATA) public data: StudentListComponet,private router:Router,public classservice:ClassServicsService,public matDialog:MatDialog ){
  
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
  value:any
  ngOnInit() {
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
      this.studentservice.studentEditSave(this.update.value).subscribe((value:any)=>{
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
      this.studentservice.dialogCreate(this.update.value).subscribe(value=>{
        this.router.navigate(['/student/list']);
      });
      return;
     }
  }
  open(){
    const def=this.matDialog.open(ClassAddComponent,{height:"35%",width:"30%"}
    );
    this.studentservice.classAdd(def).subscribe((value:any)=>{
      
    });
  }
}
