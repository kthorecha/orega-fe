import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  dataSource: any;
  dataArray: any[] = [];
  // dataArray: any[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  displayedColumns: string[] = ['id', 'name', 'username', 'city', 'pincode', 'companyname'];

  constructor(apiDataService: ApidataService) {
    apiDataService.getApiData().then((res: any)=> {
      // console.log(this.dataArray);
      this.dataArray = res;
      this.showData();
    }).catch(e => {
      console.log(e);
    })
  }
  
  ngOnInit(): void {
  }

  showData() {
    this.dataSource = new MatTableDataSource(this.dataArray);
  }

}
