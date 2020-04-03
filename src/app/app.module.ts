import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinService } from './coin.service';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
