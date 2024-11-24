import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { data } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  resultt: any =[];

  constructor(private baseService: BaseService) {}
ngOnInit() {
  this.getdatalist(this.resultt);

}
  getdatalist(data: data): void {
    this.baseService.getdata(data).subscribe((result) => {
      this.resultt = result;
      console.log('Data fetched successfully:', result);
    });
  }
}
