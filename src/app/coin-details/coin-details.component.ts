import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {
  tickers;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tickers = this.coinService.getAssetTickers(params.get('symbol'));
    });
  }
}
