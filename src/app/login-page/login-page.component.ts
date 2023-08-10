import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private loginservice:LoginServiceService,private router:Router){
    this.loginservice.login_details;
  }
  login=new FormGroup ({ phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
  pass:new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  condition:any=true;
  minlength:any=false;
  phonevalid:any
  passvalid:any
  error:any
  userLogin(){
    this.minlength=true;
    if(this.login.valid){
      this.loginservice.validCheck(this.login.value).subscribe(val=>{
        const person:string=""+val;
        localStorage.setItem("token",person);
        this.condition=false;
        this.router.navigate(['/student/list']);
      },error=>{
        this.error=error.error;
        this.condition=true;
      })
      return
    }
  }
}
