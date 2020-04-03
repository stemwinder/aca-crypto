import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  constructor(private http: HttpClient) { }

  getAssetTickers(assetSymbol?: string): Observable<object> {
    const coins = assetSymbol !== undefined ? [assetSymbol] : ['BTC', 'BCH', 'LTC', 'USDT'];
    const tickerObservables = [];

    for (const coin of coins) {
      tickerObservables.push(
        this.http.get('https://bravenewcoin-v1.p.rapidapi.com/ticker', {
          headers: {
            'x-rapidapi-host': 'bravenewcoin-v1.p.rapidapi.com',
            'x-rapidapi-key': '3cabe8fc1cmshf270236bf4fbc47p13e82ejsn41636313c8e6'
          },
          params: { show: 'usd', coin }
        })
      );
    }

    return forkJoin(tickerObservables);
  }
}
