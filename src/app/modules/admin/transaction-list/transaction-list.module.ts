import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { SingleTransactionComponent } from './components/single-transaction/single-transaction.component';
import { TransactionListRoutingModule } from './transaction-list.routing.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    TransactionListRoutingModule,
    MatTableModule
  ],
  declarations: [
    TransactionTableComponent, 
    SingleTransactionComponent
  ]
})
export class TransactionListModule { }
