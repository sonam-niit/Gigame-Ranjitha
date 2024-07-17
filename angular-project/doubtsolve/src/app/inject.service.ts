import { Inject, Injectable } from '@angular/core';
import { MY_STRING_TOKEN } from './token';

@Injectable({
  providedIn: 'root'
})
export class InjectService {

  constructor(@Inject(MY_STRING_TOKEN) private myString:string) {
    console.log('Injected String', this.myString);
    
   }

  getString(){
    return this.myString;
  }
}
