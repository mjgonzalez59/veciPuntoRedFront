import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TopUpComponent } from './components/top-up/top-up.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { SharedModule } from '../../shared/shared.module';
import { OfficeComponent } from './components/office/office.component';
import { MobileOperatorsComponent } from './components/mobile-operators/mobile-operators.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from '@ngneat/input-mask';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    InputMaskModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  declarations: [
    TransactionComponent,
    TopUpComponent,
    ServiceCardComponent,
    OfficeComponent,
    MobileOperatorsComponent,
    SendMessageComponent,
  ],
})
export class TransactionModule {}
