import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MarketPrice} from './market-price';
import { Subject, from } from  'rxjs';
import * as socketio from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MarketStatusService {

  private baseUrl =  'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getInitialMarketStatus() {
    return this.httpClient.get<MarketPrice[]>(`${this.baseUrl}/api/market`);
  }

  getUpdates() {
    let socket = socketio(this.baseUrl);
    let marketSub = new Subject<MarketPrice>();
    let marketSubObservable = from(marketSub);

    socket.on('market', (marketStatus: MarketPrice) => {
      marketSub.next(marketStatus);
    });

    return marketSubObservable;
  }
}
