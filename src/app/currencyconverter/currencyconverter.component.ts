import {Component, OnInit} from '@angular/core';
import {CurrencyManagerService} from '../currency-manager.service';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyconverterComponent implements OnInit {

  constructor(private currencyManager: CurrencyManagerService) {
  }

  ngOnInit() {
  }

  onGet() {
    this.currencyManager.getCurrencies();
  }

}
