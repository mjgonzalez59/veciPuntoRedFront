import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
// import { TopUpComponent } from './modules/admin/transaction/components/top-up/top-up.component';
import { TransactionComponent } from './modules/admin/transaction/components/transaction/transaction.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'recharge', component: TransactionComponent },
  { path: 'recharge', loadChildren: () => import('./modules/admin/transaction/transaction.module').then(m => m.TransactionModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
