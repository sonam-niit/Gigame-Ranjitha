import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private location:Location) { }

  login(){
    //Assume here we are getting token from backend
    const token='jwt-token-from-server';
    this.service.setToken(token);
  }
  goBack(){
    this.location.back();
  }
  ngOnInit(): void {
  }

}
