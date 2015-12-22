import {Component} from 'angular2/core';
import {StoreService} from '../services/store-service';

@Component({
  selector: 'home',
  templateUrl: 'app/partials/home.html',
})

export class HomeComponent {
  private data: any;
  private store: any;

  constructor(store: StoreService) {
    this.store = store;
    this.data = {
      name: store.user.name,
      numbers: []
    }

    // initialization
    this.generate_uuid();
  }

  public generate_uuid() {
    var x = [];
    var r;

    for (let i = 0; i < 8; i++) {
      r = Math.floor(Math.random() * 16);
      r = r.toString(16);
      x.push(r);
    }
    this.data.numbers = x;
  }
}
