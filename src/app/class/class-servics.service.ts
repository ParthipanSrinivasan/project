import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassServicsService {
  class:any=[];
  constructor() { 
    this.class = [
      {value: '10th', viewValue: '10th'},
      {value: '11th', viewValue: '11th'},
      {value: '12th', viewValue: '12th'},
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
      this.class.push(value);
      val.next(value);
      val.complete();
    });
    return obser;
  }
}
