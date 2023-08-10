import { Component,OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
  displayedColumns: string[] = ["id","firstname","lastname","class","action"];
  dataSource:any;
  constructor(private teacherservice:TeacherService){}
  ngOnInit(){
    this.teacherservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
}
