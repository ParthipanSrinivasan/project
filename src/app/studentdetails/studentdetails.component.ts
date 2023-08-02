import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(public heroservive:HeroService, public matDialog:MatDialog ){
    
  }
  student=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl(''),
  age:new FormControl(''),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl(''),
  });
  
  displayedColumns: string[] = ["id","firstname","lastname","age","sub","class","phone",'action'];
  dataSource:any;
  studentSaved(){
    alert("save the value");
   if(this.student.valid){
    this.heroservive.studentDetailsSaved(this.student.value).subscribe(value=>{
      this.tableList();
    });
    return;
   }
  }
  open(content:any,row:any){
    this.matDialog.open(content,{height: '95%',
    width: '50%'});
    
  }
  
  tableList(){
  this.heroservive.tableList().subscribe((value)=>{
    this.dataSource=value;
  })
  }
}
