import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionResponse } from 'src/app/core/interfaces/transaction.interface';

const ELEMENT_DATA: TransactionResponse[] = [
  {
    message: 'Recarga exitosa',
    transactionalID: 'eea7288b-d00f-490c-9497-6c24d7eaf208',
    cellPhone: '11111111111',
    value: 1000,
  },
  {
    message: 'Recarga exitosa',
    transactionalID: 'eea7288b-d00f-490c-9497-6Fc24d7eaf208',
    cellPhone: '222222222',
    value: 1000,
  },
  {
    message: 'Recarga exitosa',
    transactionalID: 'eea7288b-d00f-490c-9497-6c24d7eaf208',
    cellPhone: '33333333333',
    value: 1000,
  },
];

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
  dataSource = ELEMENT_DATA;

  constructor(private _router: Router) {}

  ngOnInit() {}

  seeTransaction(index: number) {
    this._router.navigate([`/transactions/view/${index}`]);
  }

  goBack() {
    this._router.navigate([`/services`]);
  }
}
