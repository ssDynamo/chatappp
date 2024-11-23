import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private baseService: BaseService) { }

  loginn(data:object){
    this.baseService.postdata(data).subscribe((result)=>{
      console.log(result+"data posted successfully");
    });
    console.log(data+"login service is caaled");

  }

}
