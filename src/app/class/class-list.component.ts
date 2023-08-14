import { Component,OnInit } from '@angular/core';
import { ClassServicsService } from './class-servics.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit{
  displayedColumns: string[] = ["value","viewValue"];
  dataSource:any;
  constructor(private classservice:ClassServicsService){}
  ngOnInit(){
    this.classservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
}
