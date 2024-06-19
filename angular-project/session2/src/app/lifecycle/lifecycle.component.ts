import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  @Input() data:string;
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log('Called ngOnChanges',changes);
    
  }
  ngOnInit(): void {
  }

}
