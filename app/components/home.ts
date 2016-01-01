import {Component} from 'angular2/core';
import {StoreService} from '../services/store-service';

@Component({
  selector: 'home',
  templateUrl: 'app/partials/home.html',
  providers: [StoreService]
})

export class HomeComponent {

  data: any;
  launchCode: any;
  _store: StoreService;

  constructor(_store: StoreService) {
    this._store = _store;
    this.data = this.getName();
    this.generate_uuid();
  }

  getName() {
    return this._store.get();
  }

  generate_uuid() {
    var x = [];
    var r;

    for (let i = 0; i < 40; i++) {
      r = Math.floor(Math.random() * 16);
      r = r.toString(16);
      x.push(r);
    }
    return this.launchCode = x;
  }
}
