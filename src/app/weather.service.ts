import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.openweathermap.org/data/2.5/weather';
  apiKey = '673fc4e5382ec0d157cc89519450ce69';

  constructor(private http: HttpClient) { }

  getWeatherDataByCityName(city: string) {

    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
  }

/*   getWeatherDataByZipCode(zip: string) {

    let params = new HttpParams()
    .set('zip', zip + ',us')
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params });
  } */



}
