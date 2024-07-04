import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //let's get the token from service
    const authToken= this.service.getToken();

    //clone the request and set the new Header
    const authReq=request.clone({
      setHeaders:{
        Authorization:`Bearer ${authToken}`
      }
    })
    return next.handle(authReq);//attaching that token with request
  }
}
