import {Component, OnInit} from '@angular/core';
import {Currency} from '../currency.model';

@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit {

  currencies: Currency[] = [new Currency('HUF', 'temp'), new Currency('EUR', 'temp')];

  constructor() {
  }

  ngOnInit() {
  }

}
