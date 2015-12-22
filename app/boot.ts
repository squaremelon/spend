// boot.ts

// Angular Modules
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

// Application Module
import {SpendApp} from './app'

// Service Modules
import {StoreService} from './services/store-service';
import {GraphService} from './services/graph-service';

bootstrap(SpendApp, [
  ROUTER_PROVIDERS,
  StoreService,
  GraphService
]);
