import { Component,OnInit } from '@angular/core';
import { SecondSeriviceService } from './second-serivice.service';

@Component({
  selector: 'app-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit{
  displayedColumns: string[] = ["id","firstname","lastname","class","action"];
  dataSource:any;
  constructor(private secondservice:SecondSeriviceService){}
  ngOnInit(){
    this.secondservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
}
