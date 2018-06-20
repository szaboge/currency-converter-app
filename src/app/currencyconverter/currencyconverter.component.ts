import {Component, OnInit} from '@angular/core';
import {CurrencyManagerService} from '../currency-manager.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyconverterComponent implements OnInit {

  curr_from = 'EUR';
  curr_to = 'HUF';
  actual_result = 0;
  inputValue = 1;

  ref1 = 0;
  ref2 = 0;
  baseSubscription: Subscription;


  constructor(private currencyManager: CurrencyManagerService) {
  }

  ngOnInit() {
    this.baseSubscription = this.currencyManager.baseSubject.subscribe(
      result => this.onChange()
    );
  }

  getCurrencies() {
    return Object.keys(this.currencyManager.base);
  }

  getCurrencyObj(key: string) {
    return this.currencyManager.base[key];
  }

  onChange() {
    this.actual_result = this.currencyManager.currencyConverter(this.curr_from, this.curr_to, this.inputValue);
    this.ref1 = this.currencyManager.currencyConverter(this.curr_from, this.curr_to, 1);
    this.ref2 = this.currencyManager.currencyConverter(this.curr_to, this.curr_from, 1);
  }

}
