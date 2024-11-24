import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  constructor(private db: BaseService ,private rout:Router){}
  memberlogin(data:object){
    this.db.postdata(data).subscribe(data => {
this.rout.navigate([''])
      console.log(data+"member data");
    });
  }
  

}
