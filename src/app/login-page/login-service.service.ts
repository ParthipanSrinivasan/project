import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  login_details:any=[{id:"1234",phone:"9445886295",pass:"123456"},
  {id:"12345",phone:"9788586295",pass:"123456"},
  {id:"123",phone:"8695489921",pass:"123456"}]
  constructor() { }
  validCheck(login:any){
    const obser=new Observable((val)=>{
    const elemen=this.login_details.find((val:any)=>(val.phone==login.phone && val.pass==val.pass));
    if(elemen?.phone==login.phone && elemen?.pass==login.pass){
      val.next(elemen.id);
      val.complete();
    }
    else{
      val.error({error:'no phone number'});
      val.complete();
    }
    });
    return obser;
  }
  inLogin(){
    return !!localStorage.getItem('token');
  }
  showUser(){
    const obser=new Observable((val:any)=>{
      const localid=localStorage.getItem('token');
      const token=this.login_details.find((element:any)=>(element.id==localid))
      if(token){
      val.next(token);
      val.complete();
      }
      else{
        val.error({error:"no record"});
        val.complete();
      }
    });
    return obser;
  }
}
