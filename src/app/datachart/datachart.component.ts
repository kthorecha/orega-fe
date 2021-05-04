import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-datachart',
  templateUrl: './datachart.component.html',
  styleUrls: ['./datachart.component.css']
})
export class DatachartComponent implements OnInit {


  constructor(apiDataService: ApidataService) {
    apiDataService.getApiData().then((res: any)=> {
      // console.log(this.dataArray);
      let latGreaterThan0 = 0;
      let latLessThan0 = 0;
      let lonGreaterThan0 = 0;
      let lonLessThan0 = 0;
      res.forEach((element: any) => {
        if (element.address.geo.lat > 0) latGreaterThan0++;
        if (element.address.geo.lat < 0) latLessThan0++;
        if (element.address.geo.lng > 0) lonGreaterThan0++;
        if (element.address.geo.lng < 0) lonLessThan0++;
      });
      this.renderChart(latGreaterThan0,latLessThan0,lonGreaterThan0,lonLessThan0);
    }).catch(e => {
      console.log(e);
    })
  }

  ngOnInit(): void {
  }

  renderChart(latG: any,latL: any,lonG: any,lonL: any) {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
      "geoloc": "Lat > 0",
      "value": latG
    }, {
      "geoloc": "Lat < 0",
      "value": latL
    }, {
      "geoloc": "Lon > 0",
      "value": lonG
    }, {
      "geoloc": "Lon < 0",
      "value": lonL
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "geoloc";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    // pieSeries.minHeight = 600;
    // chart.minHeight = 600;
    // chart.contentHeight = 600;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

}
