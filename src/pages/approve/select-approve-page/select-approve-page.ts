import {Component} from "@angular/core";
import { FormGroup,FormControl} from '@angular/forms';
import { NavController } from 'ionic-angular';
import {AppShareServices} from "../../share/services/app-share.services";

/*approve page*/
import { SalaryApprovePage } from "../salary-approve-page/salary-approve-page";
import { CommonApprovePage } from "../common-approve-page/common-approve-page";
import { EmployeeApprovePage } from "../employee-approve-page/employee-approve-page";
import {WordedApprovePage} from "../worked-approve-page/worked-approve-page";
import {SchoolApprovePage} from "../school-approve-page/school-approve-page";
//sub approve
import {VisaApprovePage} from "../visa-approve-page/visa-approve-page";
import {AbroadApprovePage} from "../abroad-approve-page/abroad-approve-page";
import {TaiwanApprovePage} from "../taiwan-approve-page/taiwan-approve-page";
import {RetireApprovePage} from "../retire-approve-page/retire-approve-page";
import {StudyAbroadApprovePage} from "../study-abroad-approve-page/study-abroad-approve-page";

@Component({
    templateUrl:'select-approve-page.html'
})
export class SelectApprovePage{

	  //private visaType;
    private visaForm;
    private approvePageArray=[EmployeeApprovePage,WordedApprovePage,SalaryApprovePage,SchoolApprovePage,CommonApprovePage];
    private subApproveArray=[VisaApprovePage,AbroadApprovePage,TaiwanApprovePage,RetireApprovePage,StudyAbroadApprovePage];
    constructor(public navCtrl: NavController,private appShareServices: AppShareServices){
       this.visaForm = new FormGroup({"visaType": new FormControl({value:'', disabled: false})});
    }

    doSubmit(event?){
      event.preventDefault();
    }

    showSubType(subBox,down){
      let isDown:string=this.appShareServices.toDown(down);
      if(isDown!=="down"){
         subBox.classList.remove("show-box");
      }
      else{
         subBox.classList.add("show-box");
      }
   }

   selectApprovePage(){
      let pageIndex=this.visaForm.value.visaType;
      if(!pageIndex)
       return;

      if(pageIndex.length>1){
        this.navCtrl.push(this.subApproveArray[pageIndex.toString().split('-')[1]]);
      }
      else{
        this.navCtrl.push(this.approvePageArray[pageIndex]);
      }
   }
}
