import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "../tools/HttpService";
import { Market } from "../models/Market.model";

@Injectable()
export class MarketService {
    API_URL = "http://localhost:3000/market";

    constructor(private httpService: HttpService) {
    }

    GetMyGoods(): Promise<Market[]> {
        var url = this.API_URL + "?type=house";
        return this.httpService.httpGetNoAuth(url);
    }

    GetNewGoods(marketType: string, afterTime: string): Promise<Market[]> {
        var url = this.API_URL + "?type=" + marketType;
        return this.httpService.httpGetNoAuth(url);
    }

    GetNext20Goods(marketType: string, beforeTime: string): Promise<Market[]> {
        var url = this.API_URL + "?type=" + marketType;
        return this.httpService.httpGetNoAuth(url);
    }

    AddNewGoods(market: Market) {
        var url = this.API_URL;
        return this.httpService.httpPostNoAuth(url, market);
    }

    TestPostMultipart(goodid: string, formData: FormData){
        var url = this.API_URL + "/" + goodid;
        this.httpService.httpPostMultipartNoAuth(url, formData);
    }

    DeleteGood(goodid: string){
        var url = this.API_URL + "/" + goodid;
         return this.httpService.httpDeleteNoAuth(url);
    }
}