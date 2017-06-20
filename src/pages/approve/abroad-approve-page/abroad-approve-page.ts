import {Component} from "@angular/core";
import {AppShareServices} from "../../share/services/app-share.services";

@Component({
   templateUrl:'abroad-approve-page.html'
})
export class AbroadApprovePage{
  constructor(private appShareServices: AppShareServices) {
  }
  public dateObj = {
    getDate:"",
    outDate:"",
    inDate:""
  };
  ngOnInit() {
    this.dateObj.getDate = this.appShareServices.getCurrentDate();
    this.dateObj.outDate = this.appShareServices.getCurrentDate();
    this.dateObj.inDate = this.appShareServices.getCurrentDate();
  }
  showTemplate(down) {
    this.appShareServices.toDown(down);
  }
}
