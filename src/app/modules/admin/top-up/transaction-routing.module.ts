import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopUpComponent } from './top-up.component';

const routes: Routes = [
  {
    path: 'top-up',
    //   canActivate: [ AccessGuard ],
    component: TopUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
