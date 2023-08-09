import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeroService } from '../../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentdetailsComponent } from '../studentdetails.component';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit{
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
  form:any=true;
  constructor(public heroservice:HeroService,@Inject(MAT_DIALOG_DATA) public data: StudentdetailsComponent){}
  ngOnInit() {
    if(this.data!=null){
      console.log(this.data)
      this.heroservice.dialogComponent(this.data).subscribe((value:any)=>{
        this.update.patchValue(value);
      },error=>{
        this.errormessage=error.error;
      })
    }
  }
  onUpdate(){
    this.condition=true;
    if(this.update.valid){
      this.heroservice.studentEditSave(this.update.value).subscribe((value:any)=>{
        this.form=false;
        this.errormessage="successFuly saved";
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
        this.form=false;
        this.errormessage="create successFuly";
      });
      return;
     }
  }
}