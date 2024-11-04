import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [NavBarComponent, DialogComponent],
  exports: [NavBarComponent, DialogComponent]
})
export class SharedModule { }
