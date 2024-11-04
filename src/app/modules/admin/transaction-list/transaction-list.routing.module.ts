import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { SingleTransactionComponent } from './components/single-transaction/single-transaction.component';

const routes: Routes = [
  {
    path: '',
    //   canActivate: [ AccessGuard ],
    component: TransactionTableComponent,
  },
  {
    path: 'view/:id',
    //   canActivate: [ AccessGuard ],
    component: SingleTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionListRoutingModule {}
