import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string= "http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  addUser(){

  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseUrl+"/"+id);
  }
  deleteUserById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
