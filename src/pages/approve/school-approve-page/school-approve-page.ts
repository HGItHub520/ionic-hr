import {Component, OnInit} from "@angular/core";
import {AppShareServices} from "../../share/services/app-share.services";

@Component({
  templateUrl:'school-approve-page.html'
})
export class SchoolApprovePage implements OnInit{
  constructor(private appShareServices: AppShareServices){}
  public dateObj = {
    getDate: ''
  };
  ngOnInit(){
    this.dateObj.getDate=this.appShareServices.getCurrentDate();
  }
  showTemplate(down){
    this.appShareServices.toDown(down);
  }
}
