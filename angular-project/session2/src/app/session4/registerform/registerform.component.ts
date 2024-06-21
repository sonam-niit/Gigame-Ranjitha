import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  userForm:FormGroup;
  constructor(private builder:FormBuilder) { 
    this.userForm= this.builder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log('Form Data: ',this.userForm.value);
  }
}
