import { Component, OnInit } from '@angular/core';

import { NavController, ModalController,AlertController } from 'ionic-angular';
import { ApproveService } from "../../services/ApproveService";
import { Approve } from "../../models/Approve.model";
/*select approve page*/

import {SelectApprovePage} from "./select-approve-page/select-approve-page";


@Component({
    selector: 'page-approve',
    templateUrl: 'approve.html',
    providers: [ApproveService]
})

export class ApprovePage implements OnInit{
    private approves:any;
    constructor(public navCtrl: NavController, private approveService: ApproveService) {
    }
    ngOnInit(): void {
      this.approveService.GetApproves().then((d) => {
        this.approves = d;
      });
    }
  selectBusiness(){
    this.navCtrl.push(SelectApprovePage);
  }
}
