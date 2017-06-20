import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "../tools/HttpService";
import { SalaryMonth } from "../models/SalaryMonth.model";

@Injectable()
export class SalaryMonthService {
    API_URL = "http://localhost:3000/salarys";
    
    constructor(private httpService: HttpService) {
    }

    GetSalary(month: string): Promise<SalaryMonth> {
        var url = this.API_URL + "?month=" + month;
        return this.httpService.httpGetNoAuth(url);
    }
}