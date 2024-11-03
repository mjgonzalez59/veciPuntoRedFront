import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopUpComponent } from './top-up/top-up.component';
import { TransactionRoutingModule } from './top-up/transaction-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
  ],
  declarations: [TopUpComponent]
})
export class TransactionModule { }
