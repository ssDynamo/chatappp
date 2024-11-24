import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  postdata(data:object) {
    console.log("hello");
    return this.http.post('http://localhost:3000/data', data);
    console.log(data);
  
}
getdata(data:object){
  return this.http.get('http://localhost:3000/data', data);
}
}