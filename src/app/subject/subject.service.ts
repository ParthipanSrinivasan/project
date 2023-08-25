import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  classSubject:any=[{id:"1",sub:"tamil"},
  {id:"2",sub:"english"},
  {id:"3",sub:"history"},]
  constructor() { }
  showSubjectTable(){
    const obser=new Observable((value:any)=>{
      value.next(this.classSubject);
      value.complete();
    });
    return obser;
  }
  subjectSave(value:any){
    const obser=new Observable((parmas:any)=>{
      if(!("id" in value)){
        value["id"]=(Math.floor(Math.random()*10));
      } 
      this.classSubject.push(value);
      parmas.next(value);
      parmas.complete();
    });
    return obser;
  }
}
