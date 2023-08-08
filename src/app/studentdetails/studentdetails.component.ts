import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs'; 
import { MatDialog } from '@angular/material/dialog';
import { EditTableComponent } from '../edit-table/edit-table.component';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(public heroservive:HeroService, public matDialog:MatDialog ){
    
  }
  student=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl('',[Validators.required]),
  });
  displayedColumns: string[] = ["id","firstname","lastname","age","sub","class","phone",'action'];
  dataSource:any;
  condition:any=false
  studentSaved(){
    alert("save the value");
    this.condition=true
   if(this.student.valid){
    this.heroservive.studentDetailsSaved(this.student.value).subscribe(value=>{
      this.tableList();
    });
    return;
   }
  }
  open(row:any){
    this.matDialog.open(EditTableComponent,{height: '95%',
    width:'35%',data:row.id}
    );
  }
  create(){
    this.matDialog.open(EditTableComponent,{height: '95%',
    width:'40%'})
  }
  tableList(){
  this.heroservive.tableList().subscribe((value)=>{
    this.dataSource=value;
  })
  }
}
