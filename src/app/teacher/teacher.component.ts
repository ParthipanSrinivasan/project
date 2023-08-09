import { Component,OnInit } from '@angular/core';
import { SecondSeriviceService } from '../second-serivice.service';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
constructor(private route:ActivatedRoute,private secondservice:SecondSeriviceService){}
teacher:any=new FormGroup({firstname:new FormControl('',[Validators.required]),
lastname:new FormControl('',[Validators.required]),
class:new FormControl('',[Validators.required]),
id:new FormControl('')
});
displayedColumns: string[] = ["id","firstname","lastname","class","action"];
  dataSource:any;
condition:any=false;
errormessage:any="";
val1:any=true;
val2:any=false;
ngOnInit(){
  this.route.params.subscribe(params=>{
    let id = params['id'];
    if(id!=undefined){
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
this.secondservice.teacherSaved(this.teacher.value).subscribe((value:any)=>{
      this.tableList();
    
    })
  }
  tableList(){
    this.secondservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
  editSaved(){
    this.condition=true
    if(this.teacher.valid){
      this.secondservice.updateTeacher(this.teacher.value).subscribe(val=>{
        this.tableList();
      },error=>{
        this.errormessage=error.error;
      });
    }
  }
}
