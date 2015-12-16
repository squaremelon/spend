import {bootstrap}    from 'angular2/platform/browser'
import {SpendApp} from './components/app'
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(SpendApp, [
  ROUTER_PROVIDERS,
]);
