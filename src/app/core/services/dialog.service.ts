import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(title: string, body: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: title,
        content: body,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo se cerró');
    });
  }
}
