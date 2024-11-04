import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Output() serviceName = new EventEmitter<string>();
  @Input() iconName: string;
  @Input() text: string;


  constructor() { }

  ngOnInit() {
  }

  showComponent(){
    this.serviceName.emit(this.iconName);
  }

}
