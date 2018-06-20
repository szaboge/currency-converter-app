import {Component, OnInit} from '@angular/core';
import {CurrencyManagerService} from '../currency-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  localSelected: string;

  constructor(private currencyManager: CurrencyManagerService) {
  }

  ngOnInit() {
    this.localSelected = this.currencyManager.local;
  }

  getCurrencies() {
    return Object.keys(this.currencyManager.base);
  }

  getCurrencyObj(key: string) {
    return this.currencyManager.base[key];
  }

  onChange() {
    this.currencyManager.localSubject.next(this.localSelected);
  }

}
