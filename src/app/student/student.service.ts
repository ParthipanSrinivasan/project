import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentrec:any=[];
  constructor(){
    this.studentrec=
    [{id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class_id:"3",phone:"9807867812",date:'2001-04-14',gender:"male",num:"+91"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class_id:"2",phone:"9807867812",date:'2002-12-14',gender:"male",num:"+234"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class_id:"1",phone:"9807867812",date:'2001-04-14',gender:"female",num:"+91"},
    {id:126,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class_id:"3",phone:"9807867812",date:'2002-12-14',gender:"female",num:"+82"},
    {id:127,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class_id:"2",phone:"9807867812",date:'2009-09-19',gender:"male",num:"+234"},
    {id:128,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class_id:"1",phone:"9807867812",date:'2001-04-14',gender:"female",num:"+1"}];
    
  }
  tableList(valu:any){
    const obser=new Observable((val)=>{
      const log:any=[]
      this.studentrec.forEach((element:any) => {
      if(element.class_id==valu.class_id){
          log.push(element)
          }
        });
      val.next({pagination:log.slice((valu.pageIndex*valu.pageSize),
        (valu.pageIndex*valu.pageSize)+valu.pageSize)});
        val.complete();
    })
  return obser;
  }
  tableShow(page:any){
    const obser=new Observable((val:any)=>{
      val.next(this.studentrec.slice((page.pageIndex*page.pageSize),
        (page.pageIndex*page.pageSize)+page.pageSize));
        val.complete();
    })
    return obser;
  }
  dialogComponent(dialog:any){
    const obser=new Observable((val)=>{
      const elemen=this.studentrec.find((val:any)=>(val.id==dialog))
      if(elemen){
        val.next(elemen);
        val.complete();
      }
      else{
        val.next({error:'no record find'});
        val.complete();
      }
    })
    return obser;
  }
  studentEditSave(editvalue:any){
    const obser=new Observable((val)=>{
      const elemen=this.studentrec.find((val:any)=>(val.id==editvalue.id));
        if(elemen){     
          elemen["firstname"]=editvalue.firstname
          elemen["lastname"]=editvalue.lastname
          elemen["age"]=editvalue.age
          elemen["sub"]=editvalue.sub
          elemen["phone"]=editvalue.phone
          elemen["date"]=editvalue.date
          elemen["gender"]=editvalue.gender
          val.next(elemen);
          val.complete();
        }
        else{
          val.next({error:"no record present"})
          val.complete();
        }
     })
    return obser
  }
  dialogCreate(create:any){
    const obser=new Observable((val)=>{
      if(("id" in create)){
        create["id"]=(Math.floor(Math.random()*10000));
      }
      this.studentrec.push(create);
      val.next(this.studentrec);
      val.complete();
    })
    return obser;
  }
  classStudentAdd(paremes:any){
    const obser=new Observable((val:any)=>{
     for(let i=0;i<paremes.student.length;i++){
      this.studentrec.push(paremes.student[i])
     }
     val.next(this.studentrec);
     val.complete();
    });
    return obser;
  }
}
