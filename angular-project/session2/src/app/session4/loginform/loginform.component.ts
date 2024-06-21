import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any):void{
    console.log('Form Data',form.value);
  }
}
