import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentrec:any=[];
  constructor(){
    this.studentrec=
    [{id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2001-04-14'},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2002-12-24'},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2003-09-04'},
    {id:126,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2005-05-27'},
    {id:127,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2009-09-19'},
    {id:128,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2001-04-14'},
    {id:129,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2002-12-24'},
    {id:112,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2003-09-04'},
    {id:113,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2005-05-27'},
    {id:114,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2009-09-19'},
    {id:115,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2001-04-14'},
    {id:116,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2002-12-24'},
    {id:117,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2003-09-04'},
    {id:118,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2009-09-19'},
    {id:119,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2005-05-27'},
    {id:121,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2001-04-14'},
    {id:132,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2002-12-24'},
    {id:134,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812",date:'2003-09-04'},
    {id:135,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812",date:'2005-05-27'},
    {id:136,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812",date:'2001-04-14'}];
    
  }
  tableList(valu:any){
    const obser=new Observable((val)=>{
      const student:any=[]
      this.studentrec.forEach((element:any) => {
        if(element.class==valu.value){
          student.push(element);
        }
      });
      val.next(student);
      val.complete();
    })
  return obser;
  }
  tableShow(pageSize:any,pageIndex:any){
    const obser=new Observable((val:any)=>{
      val.next(this.studentrec.slice((pageIndex*pageSize),
            (pageIndex*pageSize)+pageSize));
      val.complete();
    });
    return obser
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
          elemen["class"]=editvalue.class
          elemen["phone"]=editvalue.phone
          elemen["date"]=editvalue.date
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
}
