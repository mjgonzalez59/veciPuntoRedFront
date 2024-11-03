import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// const routes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule 
    // RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
