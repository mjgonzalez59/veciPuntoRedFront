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
    const apiKey =
      'mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1ifIyWDvwGApJ8WUM8nHVrdSkN';

    const clonedRequest = request.clone({
      setHeaders: {
        'x-api-key': apiKey,
        'Authorization': "Bearer e8797850-95bb-4ca1-ac52-c99dd3c3cbad",
      },
    });

    console.log(clonedRequest);
    

    return next.handle(clonedRequest);
  }
}
