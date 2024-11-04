import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopUpComponent } from './components/top-up/top-up.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    //   canActivate: [ AccessGuard ],
    component: TransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
