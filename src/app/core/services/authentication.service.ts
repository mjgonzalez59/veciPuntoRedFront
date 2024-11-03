import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl =
    'https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api';

  constructor(private http: HttpClient) {}

  login(credentials: { user: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, credentials);
  }
}
