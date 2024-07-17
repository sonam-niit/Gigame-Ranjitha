import { Component, OnInit } from '@angular/core';
import { InjectService } from '../inject.service';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent implements OnInit {

  injectedString:string=''
  constructor(private service:InjectService) { }

  ngOnInit(): void {
      this.injectedString=this.service.getString();
  }

}
