import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  teacherec:any
  constructor() { 
    this.teacherec=[{id:"3456",firstname:"Banu",lastname:"mathi",class:"10th"},
    {id:"8124",firstname:"Kala",lastname:"Sri",class:"09th"},
    {id:"1939",firstname:"Haritha",lastname:"Sri",class:"08th"},
    {id:"9393",firstname:"Dhivya",lastname:"dharshini",class:"12th"}]
  }
  teacherSaved(teacher:any){
    const obser=new Observable(val=>{
      if(("id" in teacher)){
        teacher["id"]=(Math.floor(Math.random()*10000));
      }
      this.teacherec.push(teacher);
      
      val.next(this.teacherec);
      val.complete();
    })
    return obser;
  }
  showList(){
    const obser=new Observable(val=>{
      val.next(this.teacherec);
      val.complete();
    })
    return obser;
  }
  idValueGet(id:any){
    const obser=new Observable(val=>{
      const elemen=this.teacherec.find((val:any)=>(val.id==id))
      if(elemen){
        val.next(elemen);
        val.complete();
      }
      else{
        val.error({error:"no record found"});
        val.complete();
      }
    })
    return obser;
  }
  updateTeacher(value:any){
    const obser=new Observable(val=>{
      const elemen=this.teacherec.find((val:any)=>val.id==value.id)
      if(elemen){
        elemen['firstname']=value.firstname;
        elemen['lastname']=value.lastname;
        elemen['class']=value.class;
        val.next(elemen);
        val.complete();
      }
      else{
        val.error({erroe:"no record update"});
        val.complete();
      }
    })
    return obser;
  }
}
