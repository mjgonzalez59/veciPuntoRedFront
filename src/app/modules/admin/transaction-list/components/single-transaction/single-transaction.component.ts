import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionResponse } from 'src/app/core/interfaces/transaction.interface';
import { PuntoRedService } from 'src/app/core/services/punto-red.service';

@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrls: ['./single-transaction.component.scss'],
})
export class SingleTransactionComponent implements OnInit {
  transaction: TransactionResponse;

  constructor(
    private _router: Router,
    private _puntoRed: PuntoRedService,
    private _routes: ActivatedRoute
  ) {}

  ngOnInit() {
    const requestId = this._routes.snapshot.params.id;
    let params = new HttpParams();
    params = params.append('transactionalId', requestId);
    this._puntoRed.getTransactionById(params).subscribe(
      (response) => {
        this.transaction = response;
      },
      (error) =>
        console.error(
          'SingleTransactionComponent in method ngOnInit failed',
          error
        )
    );
  }

  goBack() {
    this._router.navigate([`/transactions`]);
  }
}
