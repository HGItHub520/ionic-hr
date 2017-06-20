import { Component, OnInit } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { MarketEditPage } from "./market-edit";
import { MarketService } from "../../services/MarketService";
import { Market } from "../../models/Market.model";
import { MarketViewPage } from "./market-view";


@Component({
    selector: 'page-market',
    templateUrl: 'market.html',
    providers: [MarketService]
})

export class MarketPage implements OnInit {

    marketType: string = 'secondHand';

    shPlace: string = 'a';
    shSubType: string = 'a';

    secondHands: Market[];
    houses: Market[];
    mines: Market[];

    constructor(public navCtrl: NavController, private marketService: MarketService) {
    }

    ngOnInit(): void {
        this.marketService.GetNext20Goods('secondHand', '2999-12-31').then((d) => { this.secondHands = d });
        this.marketService.GetNext20Goods('house', '2999-12-31').then((d) => { this.houses = d });
        this.marketService.GetMyGoods().then((d) => { this.mines = d });
    }

    doRefresh(refresher) {
        this.marketService.GetNewGoods(this.marketType, '2017-04-10 00:00:00').then((d) => { this.secondHands = [...d, ...this.secondHands] });
        refresher.complete();
    }

    presentEditModal() {
        this.navCtrl.push(MarketEditPage, { marketType: this.marketType });
    }

    presentViewModal(item) {
        this.navCtrl.push(MarketViewPage, { market: item });
    }

    presentCheckModal(item) {
        this.navCtrl.push(MarketViewPage, { market: item, type:'mine' });
    }

}
