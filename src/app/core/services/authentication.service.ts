import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api';
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  authStatus$ = this.authStatus.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { user: string; password: string }): Observable<any> {
    return this.http.get(`${this.apiUrl}/login`, { observe: 'response' }).pipe(
      tap(() => {
        localStorage.setItem(
          'authToken',
          'mtrQF6Q11eosqyQnkMY0JGFbGqcxVg5icvfVnX1i'
        );
        this.authStatus.next(true);
      })
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
