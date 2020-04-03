import { Component, OnInit } from '@angular/core';

import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  tickers;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.tickers = this.coinService.getAssetTickers();
  }
}
