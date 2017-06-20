import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SalaryMonthPage } from '../salary/salary-month';
import { MarketPage } from '../market/market';
import { ApprovePage } from "../approve/approve";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  showPage(pn: number) {
    switch (pn) {
      case 1:
        this.navCtrl.push(SalaryMonthPage);
        break;
      case 2:
        this.navCtrl.push(MarketPage);
        break;
      case 3:
        this.navCtrl.push(ApprovePage);
        break;
    }
  }

}
