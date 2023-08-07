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
  /*@HostListener('keydown', ['$event']) onKeyDown(event:any){
    this.hilight(event.charCode >= 48 && event.charCode <= 57);
  }
  private hilight(value:any){
    this.number.nativeElement=value;
    console.log(value)
  }*/
  update=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl('',[Validators.required]),
  id:new FormControl('')
  });
  errormessage:any=''
  ngOnInit() {
     this.heroservice.dialogComponent(this.data).subscribe((value:any)=>{
      this.update.patchValue(value);
    },error=>{
      this.errormessage=error.error;
    })
  }
  onUpdate(){
    if(this.update.valid){
      this.heroservice.studentEditSave(this.update.value).subscribe((value:any)=>{
        
      },(error:any)=>{
        this.errormessage=error.error;
      })
    }
    return;
  }
}
