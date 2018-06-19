import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class CurrencyManagerService {

  constructor(private http: HttpClient) {
  }

  getCurrencies() {
    this.http.get('http://data.fixer.io/api/latest?access_key=49657a79383de3ce62a74b1be69381e5')
      .subscribe(result => console.log(result));
  }
}
