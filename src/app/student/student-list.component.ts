import { Component, OnInit,Input} from '@angular/core';
import { StudentService } from './student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { StudentPopComponent } from './student-pop/student-pop.component';
import { ClassServicsService } from '../class/class-servics.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponet implements OnInit {
  @Input() myinputMsg:string="";
  student=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  date:new FormControl(''),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl('',[Validators.required]),
  });
  displayedColumns: string[] = ["index","id","firstname","lastname","age","gender","date","sub","phone",'action'];
  dataSource:any;
  condition:any=false;
  pagination:any=[];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  constructor(public studentservive:StudentService, public matDialog:MatDialog,public classService:ClassServicsService ){
   }
  ngOnInit(){
    this.pagination["pageSize"]=this.pageSize;
    this.pagination["pageIndex"]=this.pageIndex;
    if(this.myinputMsg!=""){
    this.pagination["class_id"]=this.myinputMsg;
    this.studentservive.tableList(this.pagination).subscribe((value:any)=>{
    this.dataSource=value.pagination;
    });
    } 
  } 
  ngDoCheck(){
    if(this.myinputMsg==""){
      this.studentservive.tableShow(this.pagination).subscribe((value:any)=>{
        this.dataSource=value;
      });
    }
  }
   open(row:any){
    this.matDialog.open(StudentPopComponent,{height: '95%',
    width:'35%',data:row.id});
  }
  create(){
    this.matDialog.open(StudentPopComponent,{height: '95%',
    width:'40%'})
  }
  getServerData(e:PageEvent){
      this.pageSize=e.pageSize;
      this.pageIndex=e.pageIndex;
      this.ngOnInit();
  }
}
