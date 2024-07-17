import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

//making service available application-wide
//Global Dependency
@Injectable({
  providedIn: 'root'
})
export class PrevUrlService {


  private previousUrl:string | null = null;
  private currentUrl:string |null = null;
  constructor(private router:Router) { 
    this.currentUrl=this.router.url;
    this.router.events
    .pipe(filter(event=>event instanceof NavigationEnd))
    .subscribe((event:any)=>{
      this.previousUrl=this.currentUrl;
      this.currentUrl=event.urlAfterRedirects;
      console.log('Previous',this.previousUrl);
      console.log('current',this.currentUrl);
    })
  }
  public getPreviousUrl():string|null{
    return this.previousUrl;
  }
}
