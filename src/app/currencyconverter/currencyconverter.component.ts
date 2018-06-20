import {Component, OnDestroy, OnInit} from '@angular/core';
import {CurrencyManagerService} from '../currency-manager.service';
import {Subscription} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css'],
  animations: [
    trigger('item', [
      state('normal', style({
        opacity: 1
      })),
      transition('normal <=> *', [
        animate(0, style(
          {
            opacity: 0
          }
        )),
        animate(500)
      ])
    ])
  ]
})
export class CurrencyconverterComponent implements OnInit, OnDestroy {

  animationstate = 'other';

  curr_from = 'USD';
  curr_to = 'HUF';

  actual_result = 0;
  inputValue = 1;

  ref1 = 0;
  ref2 = 0;
  curr_from_fee = 1;
  curr_to_fee = 1;
  baseSubscription: Subscription;


  constructor(private currencyManager: CurrencyManagerService) {
  }

  ngOnInit() {
    this.baseSubscription = this.currencyManager.baseSubject.subscribe(
      result => this.onChange()
    );
    this.currencyManager.initialize();
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
    this.curr_from_fee = this.currencyManager.base[this.curr_from].fee;
    this.curr_to_fee = this.currencyManager.base[this.curr_to].fee;

    this.animationstate = this.animationstate === 'normal' ? 'other' : 'normal';
  }

  ngOnDestroy() {
    this.baseSubscription.unsubscribe();
  }

}
