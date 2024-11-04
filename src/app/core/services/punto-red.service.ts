import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRequest } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class PuntoRedService {
  private apiUrl =
    'https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api';

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getSuppliers`);
  }

  recharge(transaction: TransactionRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/buy`, transaction);
  }
}
