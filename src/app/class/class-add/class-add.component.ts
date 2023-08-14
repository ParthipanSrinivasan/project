import { Component } from '@angular/core';
import { ClassServicsService } from '../class-servics.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent {
  condition:any;
  classadd:any=new FormGroup({value:new FormControl("",[Validators.required])})
  constructor(private classService:ClassServicsService,private router:Router){}
  onSaved(){
    this.condition=true;
    if(this.classadd.valid){
      this.classService.classAdd(this.classadd.value).subscribe((value:any)=>{
        this.router.navigate(['class/list']);
      })
    }
  }
}
