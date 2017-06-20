/**
 * Created by Administrator on 2017/5/8.
 */
import { NgModule} from '@angular/core';
import {ProcessComponent} from "./component/process.component";
import {CommonModule} from "@angular/common";
import {AppShareServices} from "./services/app-share.services";
import {TipComponent} from "./component/tip.component";
@NgModule({
  declarations:[ProcessComponent,TipComponent],
  imports:[CommonModule],
  exports:[ProcessComponent,TipComponent],
  providers:[AppShareServices]
})
export class ShareModule{}
