import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeInterface} from "../_models/models.interface";

@Injectable({
  providedIn: 'root'
})
export class AppServices {

  private baseUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getData<T>(suffixUrl:string){
    return this.http.get<T[]>(`${this.baseUrl}${suffixUrl}`)
  }
}
