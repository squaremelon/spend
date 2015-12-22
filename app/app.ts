// spend by squaremelon
// app.ts

// Angular Modules
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Static Components
import {SidebarComponent}       from './components/sidebar';
import {TopbarComponent}        from './components/topbar';

// Router Components
import {HomeComponent}          from './components/home';
import {CalculatorComponent}    from './components/calculator';
import {GraphComponent}         from './components/graph';
import {SettingsComponent}      from './components/settings';

@Component({
    selector: 'app',
    templateUrl: 'app/partials/app.html',
    directives: [
      ROUTER_DIRECTIVES,
      SidebarComponent,
      TopbarComponent
    ]
})

@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/calculator', name: 'Calculator', component: CalculatorComponent},
  {path: '/graph', name: 'Graph', component: GraphComponent},
  {path: '/settings', name: 'Settings', component: SettingsComponent},
  {path: '/**', redirectTo: ['/Home']}
])

export class SpendApp {
  constructor() {
    console.log("Loaded SpendApp");
  }
}
