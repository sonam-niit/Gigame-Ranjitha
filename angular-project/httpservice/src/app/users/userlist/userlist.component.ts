import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:User[]=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe(data=>this.users=data);
  }
  delete(id:number):void{
    //alert("Delete Triggered "+id)
    this.service.deleteUserById(id).subscribe(()=>{
      alert('User Deleted');
      this.users= this.users.filter(user=>user.id!==id);
    })
  }

}
