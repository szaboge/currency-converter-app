import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input('CurrencyObject') currency: {};

  constructor() {
  }

  ngOnInit() {
  }
}
