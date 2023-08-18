import { Component } from '@angular/core';
import { LoginServiceService } from '../login-page/login-service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  loginName:any;
  constructor(public loginservice:LoginServiceService){}
  ngOnInit(){
    this.loginservice.showUser().subscribe((value:any)=>{
      this.loginName=value;
    });
  }
  logout(){
    localStorage.removeItem("token");
  }
}
