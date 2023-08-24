import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassServicsService {
  class:any=[];
  constructor() { 
    this.class = [
      {id:"123",value: '10th', viewValue: '10th',class_id:"1"},
      {id:"124",value: '11th', viewValue: '11th',class_id:"2"},
      {id:"125",value: '12th', viewValue: '12th',class_id:"3"},
    ];
  }
  showList(){
    const obser=new Observable((val:any)=>{
      val.next(this.class);
      val.complete();
    });
    return obser;
  }
  classAdd(value:any){
    const obser=new Observable((val:any)=>{
      value['viewValue']=value.value;
      if(!("id" in value)){
        value["id"]=(Math.floor(Math.random()*100));
        value["class_id"]=(Math.floor(Math.random()*10));
      } 
      this.class.push(value);
      val.next(value);
      val.complete();
    });
    return obser;
  }
  classShow(){
    const obser=new Observable((val:any)=>{
      val.next(this.class);
      val.complete();
    });
    return obser;
  }
}
