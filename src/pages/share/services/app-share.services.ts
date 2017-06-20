
import {Injectable} from "@angular/core";
@Injectable()
export class AppShareServices{

  getCurrentDate():string{
    let dateObj=new Date();
    let year=dateObj.getFullYear(),month:any=dateObj.getMonth()+1,day:any=dateObj.getDate();
    month=month>=10?month:'0'+month;
    day=day>=10?day:'0'+day;
    return year+"-"+month+"-"+day;
  }

  toDown(down){
     if(down.classList.contains("down")){
         down.classList.remove("down");
         return "";
      }
      else{
         down.classList.add("down");
         return "down";
      }
  }
}
