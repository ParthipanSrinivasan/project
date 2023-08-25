import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentrec:any=[];
  constructor(){
    this.studentrec=
    [{id:123,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'14-04-2001',gender:"male"},
    {id:124,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'24-12-2002',gender:"male"},
    {id:125,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'04-09-2003',gender:"female"},
    {id:126,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'27-05-2005',gender:"female"},
    {id:127,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'19-09-2009',gender:"male"},
    {id:128,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'14-04-2001',gender:"female"},
    {id:129,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'24-12-2002',gender:"female"},
    {id:112,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'04-09-2003',gender:"female"},
    {id:113,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'27-05-2005',gender:"male"},
    {id:114,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'2009-09-19',gender:"female"},
    {id:115,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'14-04-2001',gender:"male"},
    {id:116,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'24-12-2002',gender:"female"},
    {id:117,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'04-09-2003',gender:"male"},
    {id:118,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'19-09-2009',gender:"female"},
    {id:119,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'27-05-2005',gender:"male"},
    {id:121,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'14-04-2001',gender:"female"},
    {id:132,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'24-12-2002',gender:"male"},
    {id:134,firstname:"parth",lastname:"sokku",age:"22",sub:"english",class:"12th",class_id:"3",phone:"9807867812",date:'04-09-2003',gender:"female"},
    {id:135,firstname:"parth",lastname:"sokku",age:"22",sub:"tamil",class:"11th",class_id:"2",phone:"9807867812",date:'27-05-2005',gender:"male"},
    {id:136,firstname:"parth",lastname:"sokku",age:"22",sub:"history",class:"10th",class_id:"1",phone:"9807867812",date:'14-04-2001',gender:"female"}];
    
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
