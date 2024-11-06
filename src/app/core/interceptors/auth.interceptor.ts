import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);

    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: basicAuth,
      },
    });
    return next.handle(clonedRequest);
  }
}
