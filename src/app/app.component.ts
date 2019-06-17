import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { map, catchError} from 'rxjs/operators';
import { FAVORITE } from './favorite-list';
import { Favorite } from './favorit';
import { TOGLE } from './togle';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favorits = FAVORITE
  city: string = '';
  key: string = '6a52dfef9db890bab0070fafac70c552';

  temp: any;
  response: any;
  sunrise: any;
  sunset: any;
  error: any;
  
  


    
  
  
  
  
  constructor(private http: HttpClient){

  }

  search() {
    this.response =''
    this.error = ''
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.key)
    .subscribe((data)=>{
      this.response = data;

      this.temp = this.response.main.temp - 273.15
      this.sunrise = new Date(this.response.sys.sunrise*1000).getHours() + ':' +  new Date(this.response.sys.sunrise*1000).getMinutes();
      this.sunset = new Date(this.response.sys.sunset*1000).getHours() + ':' +  new Date(this.response.sys.sunset*1000).getMinutes();
      
    }, error =>{ 
      this.error = error;

      }
    )
  }

  
 
  ngOnInit() {
    
  }

  
}
