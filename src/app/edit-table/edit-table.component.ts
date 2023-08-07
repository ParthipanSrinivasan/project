import { Component,Inject,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { StudentdetailsComponent } from '../studentdetails/studentdetails.component';


@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit{
  constructor(public heroservice:HeroService,@Inject(MAT_DIALOG_DATA) public data: StudentdetailsComponent){

  }
  update=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  sub:new FormControl('',[Validators.required]),
  class:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  id:new FormControl('')
  });
  errormessage:any=''
  ngOnInit() {
    this.heroservice.dialogComponent(this.data).subscribe((value:any)=>{
      this.update.controls['firstname'].setValue(value.firstname);
      this.update.controls['lastname'].setValue(value.lastname);
      this.update.controls['age'].setValue(value.age);
      this.update.controls['sub'].setValue(value.sub);
      this.update.controls['class'].setValue(value.class);
      this.update.controls['phone'].setValue(value.phone);
      this.update.controls['id'].setValue(value.id);
    },error=>{
      this.errormessage=error.error;
    })
  }
  onUpdate(){
    this.heroservice.studentEditSave(this.update.value).subscribe((value:any)=>{
      console.log(value)
    },(error:any)=>{
      this.errormessage=error.error;
    })
  }
 
}
