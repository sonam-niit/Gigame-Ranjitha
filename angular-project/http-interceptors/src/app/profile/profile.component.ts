import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  getData(){
    this.http.get('http://api.demo.com/data')
    .subscribe(resp=>console.log(resp))
  }
  test(){
    this.router.navigate(['test']);//construct a URL
    this.router.navigateByUrl('login') //redirect to a single string URL
  }
  ngOnInit(): void {
  }

}
