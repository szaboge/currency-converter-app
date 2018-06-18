import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrencylistComponent } from './currencylist/currencylist.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencylistComponent,
    CurrencyconverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
