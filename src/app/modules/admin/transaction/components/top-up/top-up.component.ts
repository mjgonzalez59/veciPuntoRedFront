import { Component, OnInit } from '@angular/core';
import { PuntoRedService } from 'src/app/core/services/punto-red.service';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss'],
})
export class TopUpComponent implements OnInit {
  suppliers: any[];

  constructor(private _puntoRed: PuntoRedService) {}

  ngOnInit() {
    this._puntoRed.getSuppliers().subscribe(
      (response) => {
        this.suppliers = response;
      },
      (error) => console.error('TopUpComponent in method getSuppliers failed', error)
    );
  }
}
