import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  animations: [
    trigger('item1', [
      state('in', style({
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(2000)
      ])
    ])
  ]
})

export class CurrencyComponent implements OnInit {
  @Input('CurrencyObject') currency: { name: string, rate: number, imagePath: string };

  constructor() {
  }

  ngOnInit() {
  }
}
