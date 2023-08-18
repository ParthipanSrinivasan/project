import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentrec:any=[];
  constructor(){
    this.studentrec=
    [{id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"},
    {id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",phone:"9807867812"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",phone:"9807867812"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",phone:"9807867812"}];
    
  }
  tableList(){
    const obser=new Observable((val)=>{
      val.next(this.studentrec.slice(0,10));
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
          elemen["class"]=editvalue.class
          elemen["phone"]=editvalue.phone
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
  ngAfter(pageSize:any,pageIndex:any){
    const obser=new Observable((val)=>{
      val.next(this.studentrec.slice((pageIndex*pageSize),
            (pageIndex*pageSize)+pageSize));
      val.complete();
    });
    return obser;
  }
}
