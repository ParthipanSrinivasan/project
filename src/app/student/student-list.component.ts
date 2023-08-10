import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs'; 
import { MatDialog } from '@angular/material/dialog';
import { StudentPopComponent } from './student-pop/student-pop.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponet implements OnInit {
  constructor(public studentservive:StudentService, public matDialog:MatDialog ){
    
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
    this.studentservive.tableList().subscribe((value)=>{
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
