import { Component, OnInit } from '@angular/core';
import { FAVORITE } from '../favorite-list'
import { Favorite } from '../favorit';
import { MainService} from '../main.service'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  favorits = FAVORITE;

  constructor(private mainService: MainService) { }

  ngOnInit() {
 
  }

  deleteFav(a){
    this.mainService.deleteFav(a)
  }

  refresh(favorit) {
    this.mainService.refresh(favorit)
  }
}
