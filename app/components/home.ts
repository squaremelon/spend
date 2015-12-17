import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  templateUrl: 'app/partials/home.html',
})

export class HomeComponent {
  constructor() {
    console.log("Loaded Home Component");
  }
}
