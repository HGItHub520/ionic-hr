import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "../tools/HttpService";
import { Approve } from "../models/Approve.model";

@Injectable()
export class ApproveService {
    API_URL = "http://localhost:3000/approve";

    constructor(private httpService: HttpService) {
    }

    GetApproves(): Promise<Approve[]> {
        var url = this.API_URL;
        return this.httpService.httpGetNoAuth(url);
    }
}
