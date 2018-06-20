import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CurrencylistComponent} from './currencylist/currencylist.component';
import {CurrencyconverterComponent} from './currencyconverter/currencyconverter.component';
import {CurrencyComponent} from './currencylist/currency/currency.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencylistComponent,
    CurrencyconverterComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
