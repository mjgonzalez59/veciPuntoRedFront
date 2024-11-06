import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionResponse } from 'src/app/core/interfaces/transaction.interface';
import { PuntoRedService } from 'src/app/core/services/punto-red.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss'],
})
export class TransactionTableComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'cellPhone',
    'value',
    'transactionalID',
    'actions',
  ];
  dataSource: TransactionResponse[];

  constructor(private _router: Router, private _puntoRed: PuntoRedService) {}

  ngOnInit() {
    this._puntoRed.getAllTransactions().subscribe(
      (response) => {
        this.dataSource = response;
      },
      (error) =>
        console.error('TransactionTableComponent in method ngOnInit failed', error)
    );
  }

  seeTransaction(index: number) {
    const transactionId = this.dataSource[index].transactionalId;
    this._router.navigate([`/transactions/view/${transactionId}`]);
  }

  goBack() {
    this._router.navigate([`/services`]);
  }
}
