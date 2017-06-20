/**
 * Created by Administrator on 2017/5/8.
 */
import {Component, Input, OnInit} from "@angular/core";
@Component({
  selector:'process-range',
  templateUrl:'./process.component.html',
})
export class ProcessComponent implements OnInit{
  @Input() processObj;
  ngOnInit(){
  }
}
