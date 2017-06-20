import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import ECharts from 'echarts';

import { SalaryMonthService } from "../../services/SalaryMonthService";
import { SalaryMonth } from "../../models/SalaryMonth.model";

@Component({
    selector: 'page-salary-month',
    templateUrl: 'salary-month.html',
    providers: [SalaryMonthService]
})
export class SalaryMonthPage implements AfterViewInit {


    nowDate: string = '2017-03-01';
    myChart: ECharts.ECharts;
    salaryMonth: SalaryMonth;

    constructor(public navCtrl: NavController, private salaryMonthService: SalaryMonthService) {
    }

    ngAfterViewInit(): void {
        this.salaryMonthService.GetSalary('2017-03').then(
            (d) => { this.salaryMonth = d[0]; }
        );
        // 基于准备好的dom，初始化echarts实例
        this.myChart = ECharts.init(<HTMLDivElement>document.getElementById('linePic'));
        // 指定图表的配置项和数据
        var option = {
            tooltip: {},
            xAxis: {
                boundaryGap: false,
                data: ["十一月", "十二月", "一月", "二月", "三月"]
            },
            yAxis: {},
            series: [{
                name: '收入',
                type: 'line',
                data: [8000, 9200, 9150, 8800, 10000]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);
    }

}
