import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrencyManagerService} from '../currency-manager.service';
import {Currency} from '../currency.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit, OnDestroy {

  currencies: Currency[] = [];

  subscribtion: Subscription;

  constructor(private currencyManager: CurrencyManagerService) {
  }

  getCurrencies() {
    return Object.keys(this.currencyManager.base);
  }

  getLocalCurrencyObj() {
    return this.currencyManager.base[this.currencyManager.local];
  }

  getLocal() {
    return this.currencyManager.local;
  }

  ngOnInit() {
    this.currencies = this.currencyManager.getCurrencyObjects(this.currencyManager.local);
    this.subscribtion = this.currencyManager.localSubject.subscribe(
      (local: string) => this.currencies = this.currencyManager.getCurrencyObjects(local)
    );
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
