import { Component } from '@angular/core';

import { NavParams, NavController, AlertController, ToastController } from 'ionic-angular';
import { Market } from "../../models/Market.model";
import { MarketEditPage } from "./market-edit";
import { MarketService } from "../../services/MarketService";

@Component({
    selector: 'page-market-view',
    templateUrl: 'market-view.html',
    providers: [MarketService]
})
export class MarketViewPage {

    market: Market;
    type: string;

    constructor(private navCtrl: NavController, params: NavParams, public alertCtrl: AlertController, private toastCtrl: ToastController, private marketService: MarketService) {
        this.market = params.get('market');
        this.type = params.get('type');
    }

    modify() {
        let confirm = this.alertCtrl.create({
            title: '编辑确认',
            message: '编辑后将重新审核，确定要编辑么?',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        this.navCtrl.push(MarketEditPage, { market: this.market });
                    }
                }
            ]
        });
        confirm.present();

    }

    delete() {
        let confirm = this.alertCtrl.create({
            title: '删除确认',
            message: '删除后将无法恢复，确定要删除此物品么?',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        this.marketService.DeleteGood(this.market.id).then(
                            () => {
                                this.toastCtrl.create({ message: '删除成功', duration: 3000 }).present();
                                this.navCtrl.pop();
                            }
                        );
                    }
                }
            ]
        });
        confirm.present();
    }


}
