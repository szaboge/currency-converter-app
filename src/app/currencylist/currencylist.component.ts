import {Component, OnInit} from '@angular/core';
import {Currency} from '../currency.model';
import {CurrencyManagerService} from '../currency-manager.service';

@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit {

  currencies: Currency[] = [];

  constructor(private currencyManagerService: CurrencyManagerService) {
  }

  ngOnInit() {
    this.currencies = this.currencyManagerService.getCurrencyObjects();
  }

}
