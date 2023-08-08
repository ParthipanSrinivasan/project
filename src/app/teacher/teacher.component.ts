import { Component } from '@angular/core';
import { SecondSeriviceService } from '../second-serivice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
constructor(private secondservice:SecondSeriviceService){}
teacher:any=new FormGroup({firstname:new FormControl(''),
lastname:new FormControl(''),
class:new FormControl('')
});
displayedColumns: string[] = ["id","firstname","lastname","class","action"];
  dataSource:any;
condition:any=false
onSaved(){
this.secondservice.teacherSaved(this.teacher.value).subscribe((value:any)=>{
      this.tableList();
    })
  }
  tableList(){
    this.secondservice.showList().subscribe(value=>{
      this.dataSource=value
    });
  }
}
