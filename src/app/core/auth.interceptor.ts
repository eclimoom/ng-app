import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTAwMDAwMDAwMDA5NCIsImNyZWF0ZWQiOjE1MDI0MTc2NTc2ODYsImV4cCI6MTUwMzAyMjQ1N30.bRwAvc2Ou_yX0YS7WYsluHOm1KjW0BZH-FwyCh-BfoGr1zap1-5naLJ-CjndaYwIkcRWwN7Qycb6yN6BJfLRXQ';
    const authReq = req.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    return next.handle(authReq);
  }
}
