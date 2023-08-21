import { Component,Input,OnInit } from '@angular/core';
import { ClassServicsService } from './class-servics.service';
import { MatDialog } from '@angular/material/dialog';
import { ClassAddComponent } from './class-add/class-add.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit{  
  displayedColumns: string[] = ["value","viewValue"];
  dataSource:any;
  myInputMessage:any="hi ever body";
  constructor(private classservice:ClassServicsService,public matDialog:MatDialog){}
  ngOnInit(){
    this.classservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
  open(){
    this.matDialog.open(ClassAddComponent,{height:"35%",width:"30%"}
    );
  }
}
