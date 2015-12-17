import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'sidebar',
  templateUrl: 'app/partials/sidebar.html',
  directives: [RouterLink]
})

export class SidebarComponent {}
