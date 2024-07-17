import { Component, OnInit } from '@angular/core';
import { PrevUrlService } from '../prev-url.service';

@Component({
  selector: 'app-somecomp',
  templateUrl: './somecomp.component.html',
  styleUrls: ['./somecomp.component.css']
})
export class SomecompComponent implements OnInit {

  previousUrl:string | null =null;
  //local Dependency
  constructor(private preUrl:PrevUrlService) { }

  ngOnInit(): void {
    this.previousUrl=this.preUrl.getPreviousUrl();
  }

}
