import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { 
    console.log('triggered');
    
    this.router.events.pipe(filter(event=>event instanceof NavigationStart))
    .subscribe((event)=>{
      console.log('Navigation Started',event);
    })

    this.router.events.pipe(filter(event=>event instanceof NavigationEnd))
    .subscribe((event)=>{
      console.log('Navigation End',event);
    })
  }

  ngOnInit(): void {
  }

}
