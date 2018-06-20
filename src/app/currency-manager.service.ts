import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency} from './currency.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class CurrencyManagerService {

  localSubject = new Subject();
  local = 'HUF';

  base = {
    'HUF': {
      name: 'Hungarian Forint',
      symbol: 'Ft',
      flag: 'hu',
      rate: 0
    },
    'EUR': {
      name: 'Euro',
      symbol: '€',
      flag: 'eu',
      rate: 0
    },
    'USD': {
      name: 'US Dollar',
      symbol: '$',
      flag: 'us',
      rate: 0
    },
    'GBP': {
      name: 'British Pound',
      symbol: '£',
      flag: 'gb',
      rate: 0
    },
    'INR': {
      name: 'Indian Rupee',
      symbol: '₹',
      flag: 'in',
      rate: 0
    },
    'AUD': {
      name: 'Australian Dollar',
      symbol: '$',
      flag: 'au',
      rate: 0
    },
    'CAD': {
      name: 'Canadian Dollar',
      symbol: '$',
      flag: 'ca',
      rate: 0
    },
    'SGD': {
      name: 'Singapore Dollar',
      symbol: '$',
      flag: 'sg',
      rate: 0
    },
    'CHF': {
      name: 'Swiss Franc',
      symbol: 'CHF',
      flag: 'ch',
      rate: 0
    },
    'MYR': {
      name: 'Malaysian Ringgit',
      symbol: 'RM',
      flag: 'my',
      rate: 0
    },
    'JPY': {
      name: 'Japanese Yen',
      symbol: '¥',
      flag: 'jp',
      rate: 0
    },
    'CNY': {
      name: 'Chinese Yuan Renminbi',
      symbol: '¥',
      flag: 'cn',
      rate: 0
    },
    'RON': {
      name: 'Romanian Leu',
      symbol: 'lei',
      flag: 'ro',
      rate: 0
    },
    'PLN': {
      name: 'Polish Zloty',
      symbol: 'zł',
      flag: 'pl',
      rate: 0
    }
  };

  data = {
    'success': true,
    'timestamp': 1529410088,
    'base': 'EUR',
    'date': '2018-06-19',
    'rates': {
      'AED': 4.239285,
      'AFN': 82.17948,
      'ALL': 125.219831,
      'AMD': 556.431273,
      'ANG': 2.091994,
      'AOA': 283.320695,
      'ARS': 31.824894,
      'AUD': 1.569026,
      'AWG': 2.054487,
      'AZN': 1.961576,
      'BAM': 1.959147,
      'BBD': 2.308412,
      'BDT': 96.780189,
      'BGN': 1.943912,
      'BHD': 0.435945,
      'BIF': 2020.991987,
      'BMD': 1.154206,
      'BND': 1.544096,
      'BOB': 7.917816,
      'BRL': 4.35771,
      'BSD': 1.154206,
      'BTC': 0.000171,
      'BTN': 78.485589,
      'BWP': 12.029714,
      'BYN': 2.308417,
      'BYR': 22622.441943,
      'BZD': 2.305871,
      'CAD': 1.532959,
      'CDF': 1806.907237,
      'CHF': 1.150028,
      'CLF': 0.026801,
      'CLP': 740.919592,
      'CNY': 7.478682,
      'COP': 3372.706113,
      'CRC': 651.491716,
      'CUC': 1.154206,
      'CUP': 30.586465,
      'CVE': 110.307533,
      'CZK': 25.813708,
      'DJF': 204.875647,
      'DKK': 7.454499,
      'DOP': 57.190917,
      'DZD': 135.616924,
      'EGP': 20.567985,
      'ERN': 17.301278,
      'ETB': 31.460893,
      'EUR': 1,
      'FJD': 2.394983,
      'FKP': 0.876387,
      'GBP': 0.877128,
      'GEL': 2.826193,
      'GGP': 0.877219,
      'GHS': 5.434586,
      'GIP': 0.876623,
      'GMD': 54.074559,
      'GNF': 10390.164721,
      'GTQ': 8.63575,
      'GYD': 237.870356,
      'HKD': 9.059537,
      'HNL': 27.57167,
      'HRK': 7.380032,
      'HTG': 76.316119,
      'HUF': 324.205003,
      'IDR': 16072.321636,
      'ILS': 4.202236,
      'IMP': 0.877219,
      'INR': 78.935124,
      'IQD': 1366.580166,
      'IRR': 48984.511351,
      'ISK': 126.200904,
      'JEP': 0.877219,
      'JMD': 150.924,
      'JOD': 0.818105,
      'JPY': 126.811487,
      'KES': 116.401695,
      'KGS': 78.827436,
      'KHR': 4643.025311,
      'KMF': 487.075307,
      'KPW': 1038.784975,
      'KRW': 1287.101543,
      'KWD': 0.34938,
      'KYD': 0.946533,
      'KZT': 393.653572,
      'LAK': 9669.939379,
      'LBP': 1737.080498,
      'LKR': 184.557568,
      'LRD': 163.643357,
      'LSL': 15.754774,
      'LTL': 3.518827,
      'LVL': 0.716242,
      'LYD': 1.564983,
      'MAD': 11.038248,
      'MDL': 19.373343,
      'MGA': 3774.253909,
      'MKD': 61.254023,
      'MMK': 1578.954091,
      'MNT': 2794.956579,
      'MOP': 9.330948,
      'MRO': 409.743376,
      'MUR': 40.524182,
      'MVR': 17.971031,
      'MWK': 826.884848,
      'MXN': 23.864942,
      'MYR': 4.619149,
      'MZN': 67.671112,
      'NAD': 15.9972,
      'NGN': 413.205485,
      'NIO': 36.355307,
      'NOK': 9.490933,
      'NPR': 125.289089,
      'NZD': 1.674291,
      'OMR': 0.444252,
      'PAB': 1.154206,
      'PEN': 3.780366,
      'PGK': 3.775179,
      'PHP': 61.530735,
      'PKR': 140.478438,
      'PLN': 4.314655,
      'PYG': 6542.733501,
      'QAR': 4.201082,
      'RON': 4.663453,
      'RSD': 116.920398,
      'RUB': 73.917217,
      'RWF': 980.417383,
      'SAR': 4.3285,
      'SBD': 9.121232,
      'SCR': 15.535572,
      'SDG': 20.723887,
      'SEK': 10.325714,
      'SGD': 1.569235,
      'SHP': 0.87662,
      'SLL': 9164.397704,
      'SOS': 648.663643,
      'SRD': 8.576123,
      'STD': 24508.644849,
      'SVC': 10.099181,
      'SYP': 594.393097,
      'SZL': 15.99847,
      'THB': 37.881546,
      'TJS': 10.497854,
      'TMT': 3.924301,
      'TND': 3.009366,
      'TOP': 2.659061,
      'TRY': 5.502216,
      'TTD': 7.674891,
      'TWD': 34.918215,
      'TZS': 2617.739447,
      'UAH': 30.481907,
      'UGX': 4446.002706,
      'USD': 1.154206,
      'UYU': 36.449539,
      'UZS': 9077.831554,
      'VEF': 92105.65623,
      'VND': 26374.766369,
      'VUV': 124.711986,
      'WST': 2.992739,
      'XAF': 655.58924,
      'XAG': 0.070973,
      'XAU': 0.000908,
      'XCD': 3.116134,
      'XDR': 0.817891,
      'XOF': 655.589178,
      'XPF': 119.373542,
      'YER': 288.378431,
      'ZAR': 15.998685,
      'ZMK': 10389.24345,
      'ZMW': 11.425514,
      'ZWL': 372.064159
    }
  };

  /*data = {};*/


  constructor(private http: HttpClient) {
    this.initialize();
    this.localSubject.next(this.local);
  }


  initialize() {

    /*this.http.get('http://data.fixer.io/api/latest?access_key=49657a79383de3ce62a74b1be69381e5')
      .subscribe(result => {
        this.data = result;
        console.log(result);
        for (const i of Object.keys(this.base)) {
          this.base[i].rate = this.data['rates'][i];
        }
        console.log(this.base);
      });*/
    for (const i of Object.keys(this.base)) {
      this.base[i].rate = this.data['rates'][i];
    }
  }

  currencyConverter(from: string, to: string, amount: number) {
    const from_rate = this.base[from].rate;
    const to_rate = this.base[to].rate;
    let result = amount;

    if (from !== 'EUR' && to !== 'EUR') {
      result = (amount / from_rate) * to_rate;
    } else if (from === 'EUR' && to !== 'EUR') {
      result = amount * to_rate;
    } else if (from !== 'EUR' && to === 'EUR') {
      result = amount / from_rate;
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
