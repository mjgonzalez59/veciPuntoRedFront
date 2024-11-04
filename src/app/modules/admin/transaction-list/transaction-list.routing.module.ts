import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';

const routes: Routes = [
  {
    path: '',
    //   canActivate: [ AccessGuard ],
    component: TransactionTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionListRoutingModule {}
