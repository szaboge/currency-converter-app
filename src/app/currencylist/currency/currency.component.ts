import {Component, OnInit, Input} from '@angular/core';
import {Currency} from '../../currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input('CurrencyObject') currency: Currency;

  constructor() {
  }

  ngOnInit() {
  }

}
