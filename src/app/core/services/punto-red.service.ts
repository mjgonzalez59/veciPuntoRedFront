import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionRequest } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class PuntoRedService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/suppliers`);
  }

  recharge(transaction: TransactionRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/recharge`, transaction);
  }

  getAllTransactions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/transactions`);
  }

  getTransactionById(params: HttpParams): Observable<any> {
    return this.http.get(`${this.apiUrl}/transaction`, { params });
  }
}
