import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency} from './currency.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class CurrencyManagerService {

  localSubject = new Subject<string>();
  baseSubject = new Subject();

  local = 'HUF';
  base = {
    'HUF': {
      name: 'Hungarian Forint',
      symbol: 'Ft',
      flag: 'hu',
      rate: 0,
      fee: 0
    },
    'EUR': {
      name: 'Euro',
      symbol: '€',
      flag: 'eu',
      rate: 0,
      fee: 0
    },
    'USD': {
      name: 'US Dollar',
      symbol: '$',
      flag: 'us',
      rate: 0,
      fee: 0
    },
    'GBP': {
      name: 'British Pound',
      symbol: '£',
      flag: 'gb',
      rate: 0,
      fee: 0
    },
    'INR': {
      name: 'Indian Rupee',
      symbol: '₹',
      flag: 'in',
      rate: 0,
      fee: 0
    },
    'AUD': {
      name: 'Australian Dollar',
      symbol: '$',
      flag: 'au',
      rate: 0,
      fee: 0
    },
    'CAD': {
      name: 'Canadian Dollar',
      symbol: '$',
      flag: 'ca',
      rate: 0,
      fee: 0
    },
    'SGD': {
      name: 'Singapore Dollar',
      symbol: '$',
      flag: 'sg',
      rate: 0,
      fee: 0
    },
    'CHF': {
      name: 'Swiss Franc',
      symbol: 'CHF',
      flag: 'ch',
      rate: 0,
      fee: 0
    },
    'MYR': {
      name: 'Malaysian Ringgit',
      symbol: 'RM',
      flag: 'my',
      rate: 0,
      fee: 0
    },
    'JPY': {
      name: 'Japanese Yen',
      symbol: '¥',
      flag: 'jp',
      rate: 0,
      fee: 0
    },
    'CNY': {
      name: 'Chinese Yuan Renminbi',
      symbol: '¥',
      flag: 'cn',
      rate: 0,
      fee: 0
    },
    'RON': {
      name: 'Romanian Leu',
      symbol: 'lei',
      flag: 'ro',
      rate: 0,
      fee: 0
    },
    'PLN': {
      name: 'Polish Zloty',
      symbol: 'zł',
      flag: 'pl',
      rate: 0,
      fee: 0
    }
  };

  data = {};

  constructor(private http: HttpClient) {
    this.initialize();
  }

  initialize() {
    this.http.get('http://data.fixer.io/api/latest?access_key=49657a79383de3ce62a74b1be69381e5')
      .subscribe(result => {
        this.data = result;
        for (const i of Object.keys(this.base)) {
          this.base[i].rate = this.data['rates'][i];
          this.base[i].fee = ((Math.random() * 2) + 1).toFixed(2);
        }
        this.baseSubject.next(this.base);
      });
  }

  currencyConverter(from: string, to: string, amount: number) {
    const from_rate = this.base[from].rate;
    const to_rate = this.base[to].rate;
    const from_fee = (100 - this.base[from].fee) / 100;
    const to_fee = (100 - this.base[to].fee) / 100;
    let result = amount;

    if (from !== 'EUR' && to !== 'EUR') {
      result = ((amount / from_rate) * from_fee) * to_rate * to_fee;
    } else if (from === 'EUR' && to !== 'EUR') {
      result = amount * to_rate * to_fee;
    } else if (from !== 'EUR' && to === 'EUR') {
      result = amount / from_rate * from_fee;
    }
    return result;
  }

  getCurrencyObjects(local: string) {
    this.local = local;
    const currencies: Currency[] = [];
    for (const i of Object.keys(this.base)) {
      if (i !== local) {
        currencies.push(new Currency(i, this.currencyConverter(i, local, 1), this.base[i].flag, this.local));
      }
    }
    return currencies;
  }
}
