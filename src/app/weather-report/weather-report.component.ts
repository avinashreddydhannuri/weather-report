import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {
  weather: any;
  public requestIsValid = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCity(city) {
      this.weatherService.getWeatherDataByCityName(city).subscribe( data => {
      this.weather = data;
      this.requestIsValid = true;
    },
    err => {
      console.log("ERROR: API returned this: " +' '+ err);
    })
  }

}
