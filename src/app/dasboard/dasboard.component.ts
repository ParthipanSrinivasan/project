import { Component } from '@angular/core';
import { LoginServiceService } from '../login-page/login-service.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent {
  constructor(public loginservice:LoginServiceService){}
  logout(){
    localStorage.removeItem("token");
  }
}
