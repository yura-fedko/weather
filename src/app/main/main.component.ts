import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { FAVORITE } from '../favorite-list';
import { Favorite } from '../favorit';
import { MainService} from '../main.service'
import { TOGLE, FAV } from '../togle';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  favorite = FAVORITE
  fav=FAV
  city: string = '';
  key: string = '6a52dfef9db890bab0070fafac70c552';

  temp: any;
  response: any;
  sunrise: any;
  sunset: any;
  error: any;
  togle=TOGLE;
  date: any
  abc: any
  
  
  constructor(private http: HttpClient, private mainService: MainService){

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
      this.date =  new Date().toLocaleTimeString() 
      this.fav.state = this.favorite.some(el=> {
        return el.name === this.response.name;
      })
     
    }, error =>{ 
      this.error = error;

      }
    )
  }

  addFav(name, temp, weather, speed, humidity, sunrise, sunset, date): void {
  this.mainService.addFav(name, temp, weather, speed, humidity, sunrise, sunset, date)
  
 }

  deleteFav(a){
  this.mainService.deleteFav(a)
  this.fav.state=false
}

  ngOnInit() {
    
  }

}
