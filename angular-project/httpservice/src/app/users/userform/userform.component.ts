import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  user:User={id:0,name:'',email:'',country:''};
  isEdit:boolean=false;
  constructor(
    private service:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id= + this.route.snapshot.paramMap.get('id')!; //unary operator for converting 
    //string to num
    if(id){
      this.isEdit=true;
      //get data by Id and show it in your form 
      this.service.getUserById(id).subscribe((data)=>this.user=data);
    }
  }

  saveData():void{
    if(this.isEdit){
      //call update
    }else{
      //call add User
    }
    //navigate to list comp
  }
}
