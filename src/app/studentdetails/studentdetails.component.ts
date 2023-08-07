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
  open(row:any){
    this.matDialog.open(EditTableComponent,{height: '95%',
    width:'50%',data:{firstname:row.firstname,lastname:row.lastname,age:row.age,sub:row.sub,class:row.class,phone:row.phone}},
    );
    console.log(row);
  }
  
  tableList(){
  this.heroservive.tableList().subscribe((value)=>{
    this.dataSource=value;
  })
  }
}
