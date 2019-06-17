import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Injectable } from '@angular/core';
import { FAVORITE } from './favorite-list';
import { Favorite } from './favorit';
import { TOGLE, FAV } from './togle';
import { transitiveScopesFor } from '@angular/core/src/render3/jit/module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  favorite = FAVORITE
  fav = FAV
  response: any
  togle=TOGLE
  key: string = '6a52dfef9db890bab0070fafac70c552';
  temp: number;
  sunrise: string;
  sunset: string;
  date: string;
  constructor(private http: HttpClient) {
    }

    favIcon(){
      if(this.favorite.length>0){
        this.togle.state =true;
      }else{
        this.togle.state = false;
      }
    }

    

    addFav(name, temp, weather, speed, humidity, sunrise, sunset, date){
      this.favorite.push({name: name, temp: temp, speed: speed, main: weather, humidity: humidity, sunset: sunset, sunrise: sunrise, date: date })
      this.favIcon()
      this.fav.state = true
    }

    deleteFav(a){
      var index = this.favorite.indexOf(a)
      this.favorite.splice(index, 1)
      this.favIcon()
      
    }

    refresh(favorite) {
      this.response =''
      console.log(favorite)
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + favorite.name + '&appid=' + this.key)
      .subscribe((data)=>{
        this.response = data;
  
        favorite.temp = this.response.main.temp - 273.15
        favorite.sunrise = new Date(this.response.sys.sunrise*1000).getHours() + ':' +  new Date(this.response.sys.sunrise*1000).getMinutes();
        favorite.sunset = new Date(this.response.sys.sunset*1000).getHours() + ':' +  new Date(this.response.sys.sunset*1000).getMinutes();
        favorite.date =  new Date().toLocaleTimeString() 
        
       
      })
    }


}
