import { Component, OnInit } from '@angular/core';
import * as TransactionConstants from 'src/app/core/constants/transaction.constants';

type ShowComponentKeys =
  | 'smartphone'
  | 'description'
  | 'receipt'
  | 'rss_feed'
  | 'location_on'
  | 'comment';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  services = TransactionConstants.services;
  showComponent: { [key in ShowComponentKeys]: boolean } =
    TransactionConstants.showComponent;

  constructor() {}

  ngOnInit() {
    this.toggleComponent('smartphone');
  }

  toggleComponent(iconName: string) {
    this.showComponent = { ...TransactionConstants.showComponent };
    this.showComponent[iconName as ShowComponentKeys] = true;
  }
}
