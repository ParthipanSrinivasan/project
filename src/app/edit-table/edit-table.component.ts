import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit{
  constructor(private route:ActivatedRoute,public heroservice:HeroService, public matDialog:MatDialog){

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
  ngOnInit(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.heroservice.studentEdit(id).subscribe((value)=>{
       let editvalue:any=value
      this.update.controls["firstname"].setValue(editvalue.firstname);
       this.update.controls["lastname"].setValue(editvalue.lastname);
       this.update.controls["age"].setValue(editvalue.age);
       this.update.controls["sub"].setValue(editvalue.sub);
       this.update.controls["class"].setValue(editvalue.class);
       this.update.controls["phone"].setValue(editvalue.phone);
      },error=>{
        this.errormessage=error.error;
      })
    });
  }
  onUpdate(){
    this.heroservice.studentEditSave(this.update.value).subscribe((value)=>{
      
    })
  }
  open(content:any){
    this.matDialog.open(content,{height: '95%',
    width: '50%'});
    
  }
}
