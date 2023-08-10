import { Component, OnInit } from '@angular/core';
import { HeroService } from './first-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs'; 
import { MatDialog } from '@angular/material/dialog';
import { StudentPopComponent } from './viewpop/student-pop.component';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponet implements OnInit {
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
  condition:any=false;
  ngOnInit(){
    this.heroservive.tableList().subscribe((value)=>{
    this.dataSource=value;
    });
  }
  open(row:any){
    this.matDialog.open(StudentPopComponent,{height: '95%',
    width:'35%',data:row.id}
    );
  }
  create(){
    this.matDialog.open(StudentPopComponent,{height: '95%',
    width:'40%'})
  }
}
