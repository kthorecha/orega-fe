import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-datapercent',
  templateUrl: './datapercent.component.html',
  styleUrls: ['./datapercent.component.css']
})
export class DatapercentComponent implements OnInit {
  percentage: any = 0;
  upOrDown: any = '↑';

  constructor(apiDataService: ApidataService) {
    apiDataService.getApiData().then((res: any)=> {
      this.percentage = res.length;
      if (res.length > 0) {
        this.upOrDown = '↑';
      } else {
        this.upOrDown = '↓';
      }
    }).catch(e => {
      console.log(e);
    })
  }

  ngOnInit(): void {
  }

}
