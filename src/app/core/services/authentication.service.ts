import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl =
    'https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api';

  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  authStatus$ = this.authStatus.asObservable();

  constructor(private http: HttpClient) {}

  login(credentials: { user: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.token);
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
