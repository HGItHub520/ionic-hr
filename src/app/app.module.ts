import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SalaryMonthPage } from '../pages/salary/salary-month';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera} from '@ionic-native/camera';
import { File} from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';

import { HttpService } from "../tools/HttpService";
import { StorageService } from "../tools/StorageService";
import { HttpModule } from "@angular/http";
import { MarketPage } from "../pages/market/market";
import { MarketEditPage } from "../pages/market/market-edit";

import { AutoFitLayout } from '../directives/auto-fit-layout';
import { MarketViewPage } from "../pages/market/market-view";
import { ApprovePage } from "../pages/approve/approve";
import {ShareModule} from "../pages/share/share.module";

//业务办理增加证明页
import { SalaryApprovePage } from "../pages/approve/salary-approve-page/salary-approve-page";
import { CommonApprovePage } from "../pages/approve/common-approve-page/common-approve-page";
import { SelectApprovePage } from "../pages/approve/select-approve-page/select-approve-page";
import { EmployeeApprovePage } from "../pages/approve/employee-approve-page/employee-approve-page";
import {WordedApprovePage} from "../pages/approve/worked-approve-page/worked-approve-page";
import {SchoolApprovePage} from "../pages/approve/school-approve-page/school-approve-page";
/*sub approve*/
import {VisaApprovePage} from "../pages/approve/visa-approve-page/visa-approve-page";
import {AbroadApprovePage} from "../pages/approve/abroad-approve-page/abroad-approve-page";
import {TaiwanApprovePage} from "../pages/approve/taiwan-approve-page/taiwan-approve-page";
import {RetireApprovePage} from "../pages/approve/retire-approve-page/retire-approve-page";
import {StudyAbroadApprovePage} from "../pages/approve/study-abroad-approve-page/study-abroad-approve-page";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SalaryMonthPage,
    MarketPage,
    MarketEditPage,
    MarketViewPage,
    ApprovePage,
    AutoFitLayout,
    /*approve page*/
    SalaryApprovePage,
    CommonApprovePage,
    SelectApprovePage,
    EmployeeApprovePage,
    WordedApprovePage,
    SchoolApprovePage,
    /*sub approve*/
    VisaApprovePage,
    AbroadApprovePage,
    TaiwanApprovePage,
    RetireApprovePage,
    StudyAbroadApprovePage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    ShareModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: '返回'
        }
      },
      tabsHideOnSubPages: 'true'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SalaryMonthPage,
    MarketPage,
    MarketEditPage,
    MarketViewPage,
    ApprovePage,
    /*approve page*/
    SalaryApprovePage,
    CommonApprovePage,
    SelectApprovePage,
    EmployeeApprovePage,
    WordedApprovePage,
    SchoolApprovePage,
    /*sub approve*/
    VisaApprovePage,
    AbroadApprovePage,
    TaiwanApprovePage,
    RetireApprovePage,
    StudyAbroadApprovePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    ImagePicker,
    HttpService,
    StorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
