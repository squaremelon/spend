import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// Static Components
import {SidebarComponent}       from './sidebar/sidebar';
import {TopbarComponent}        from './topbar/topbar';

// Router Components
import {HomeComponent}          from './home/home';
import {CalculatorComponent}    from './calculator/calculator';
import {GraphComponent}         from './graph/graph';
import {SettingsComponent}      from './settings/settings';

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
