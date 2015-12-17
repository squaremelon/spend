import {bootstrap}    from 'angular2/platform/browser'
import {SpendApp} from './app'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Storejs} from './services/store';

bootstrap(SpendApp, [
  ROUTER_PROVIDERS,
  Storejs
]);
