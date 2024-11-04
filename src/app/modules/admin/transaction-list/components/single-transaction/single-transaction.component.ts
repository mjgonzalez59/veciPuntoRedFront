import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionResponse } from 'src/app/core/interfaces/transaction.interface';

@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrls: ['./single-transaction.component.scss'],
})
export class SingleTransactionComponent implements OnInit {
  transaction: TransactionResponse = {
    message: 'Recarga exitosa',
    transactionalID: 'eea7288b-d00f-490c-9497-6c24d7eaf208',
    cellPhone: '11111111111',
    value: 1000,
  };

  constructor(private _router: Router) {}

  ngOnInit() {}

  goBack(){
    this._router.navigate([`/transactions`]);
  }
}
