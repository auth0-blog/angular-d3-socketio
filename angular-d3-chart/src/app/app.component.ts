import {Component} from '@angular/core';
import {MarketStatusService} from './market-status.service';
import {Observable} from 'rxjs';
import {MarketPrice} from './market-price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  marketStatus: MarketPrice[];
  marketStatusToPlot: MarketPrice[];

  set MarketStatus(status: MarketPrice[]) {
    this.marketStatus = status;
    this.marketStatusToPlot = this.marketStatus.slice(0, 20);
  }

  constructor(private marketStatusSvc: MarketStatusService) {
  this.marketStatusSvc.getInitialMarketStatus()
    .subscribe(prices => {
      this.MarketStatus = prices;

      let marketUpdateObservable =  this.marketStatusSvc.getUpdates();  // 1
      marketUpdateObservable.subscribe((latestStatus: MarketPrice) => {  // 2
        this.MarketStatus = [latestStatus].concat(this.marketStatus);  // 3
      });  // 4
    });
}
}
