import { Component, OnInit } from '@angular/core';
import { PuntoRedService } from 'src/app/core/services/punto-red.service';
import * as TransactionConstants from 'src/app/core/constants/transaction.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';
import { TransactionRequest } from 'src/app/core/interfaces/transaction.interface';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss'],
})
export class TopUpComponent implements OnInit {
  transactionForm: FormGroup;
  currencyM = TransactionConstants.currencyMask;
  phoneM = TransactionConstants.phoneMask;
  suppliers: any[];

  constructor(
    private _puntoRed: PuntoRedService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this._puntoRed.getSuppliers().subscribe(
      (response) => {
        this.suppliers = response;
      },
      (error) =>
        console.error('TopUpComponent in method getSuppliers failed', error)
    );

    this.initilizeForm();
  }

  initilizeForm() {
    this.transactionForm = this.fb.group({
      phoneNumber: [null, [Validators.required]],
      value: [null, [Validators.required]],
      mobileSupplier: [null, [Validators.required]],
    });
  }

  send() {
    if (this.transactionForm.valid) {
      const transactionValue = this.transactionForm.get('value')?.value;
      if (transactionValue) {
        let valueNumber: number = Number(transactionValue);
        valueNumber = valueNumber < 1000 ? 1000 : valueNumber;
        const transaction: TransactionRequest = {
          cellPhone: this.transactionForm.get('phoneNumber')?.value,
          value: valueNumber,
          supplierId: this.transactionForm.get('mobileSupplier')?.value,
        };
        this._puntoRed.recharge(transaction).subscribe(
          (response) => {
            this.dialogService.openDialog(
              'Recarga Exitosa',
              `TransactionalID: ${response.transactionalID}`
            );
          },
          (error) =>
            console.error('TopUpComponent in method getSuppliers failed', error)
        );
      }
    } else {
      this.dialogService.openDialog(
        'Cuidado',
        'Hay algunos campos que no has diligenciado correctamente'
      );
    }
  }
}
