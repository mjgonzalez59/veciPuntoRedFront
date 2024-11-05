import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent implements OnInit {
  @Output() serviceName = new EventEmitter<string>();
  @Input() iconName: string;
  @Input() text: string;

  constructor(private _router: Router) {}

  ngOnInit() {}

  showComponent() {
    if (this.iconName === 'description' || this.iconName === 'receipt') {
      this._router.navigate(['/transactions']);
    } else {
      this.serviceName.emit(this.iconName);
    }
  }
}
