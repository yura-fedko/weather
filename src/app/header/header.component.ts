import { Component, OnInit, Input } from '@angular/core';
import { TOGLE } from '../togle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  togle=TOGLE
  constructor() { }

  ngOnInit() {
  }

}
