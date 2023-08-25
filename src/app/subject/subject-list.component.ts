import { Component,OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { MatDialog } from '@angular/material/dialog';
import { SubjectAddComponent } from './subject-add/subject-add.component';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent  implements OnInit{
subjects:any;
constructor(private subjectService:SubjectService,public matdialog:MatDialog){}
ngOnInit(){
  this.subjectService.showSubjectTable().subscribe((value:any)=>{
    this.subjects=value;
  });
}
createSubject(){
  this.matdialog.open(SubjectAddComponent,{height:"45%",width:"30%"})
}
}
