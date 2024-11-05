import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/core/services/dialog.service';
import { DialogComponent } from 'src/app/modules/shared/dialog/dialog.component';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnInit {
  messageForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.initilizeForm();
  }

  initilizeForm() {
    this.messageForm = this.fb.group({
      subject: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }
  
  send() {
    if (this.messageForm.valid) {
      this.dialogService.openDialog(
        'Gracias por enviarnos un mensaje',
        'Nuestros agentes recibirán tu mensaje y te contestarán a la mayor brevedad posible'
      );
      this.initilizeForm();
    } else {
      this.dialogService.openDialog(
        'Cuidado',
        'Hay algunos campos que no has diligenciado correctamente'
      );
    }
  }
}
