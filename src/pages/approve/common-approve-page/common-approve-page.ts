import {Component} from "@angular/core";
import {AppShareServices} from "../../share/services/app-share.services";

@Component({
   templateUrl:'common-approve-page.html'
})
export class CommonApprovePage {
  constructor(private appShareServices: AppShareServices) {
  }

  public dateObj = {
    getDate: ''
  };
  ngOnInit() {
    this.dateObj.getDate = this.appShareServices.getCurrentDate();
  }
  showTemplate(down) {
    this.appShareServices.toDown(down);
  }
}
