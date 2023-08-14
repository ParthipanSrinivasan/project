import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassServicsService {
  class:any=[];
  constructor() { 
    this.class = [
      {value: '10th', viewValue: '10th'},
      {value: '11th', viewValue: '11th'},
      {value: '12th', viewValue: '12th'},
    ];
  }
}
