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
  baseSubscription: Subscription;

  constructor(private currencyManager: CurrencyManagerService) {
  }

  getLocalCurrencyObj() {
    return this.currencyManager.base[this.currencyManager.local];
  }

  getLocal() {
    return this.currencyManager.local;
  }

  setCurrencies(local: string) {
    this.currencies = this.currencyManager.getCurrencyObjects(local);
  }

  ngOnInit() {
    this.currencies = this.currencyManager.getCurrencyObjects(this.currencyManager.local);

    this.subscribtion = this.currencyManager.localSubject.subscribe(
      (local: string) => this.setCurrencies(local)
    );
    this.baseSubscription = this.currencyManager.baseSubject.subscribe(
      result => this.setCurrencies(this.getLocal())
    );

    this.currencyManager.initialize();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
    this.baseSubscription.unsubscribe();
  }
}
