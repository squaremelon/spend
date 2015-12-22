import {Component} from 'angular2/core';
import {GraphService} from '../services/graph-service';

@Component({
  selector: 'graph',
  templateUrl: 'app/partials/graph.html',
})

export class GraphComponent {
  private graph: GraphService;
  
  constructor(graph: GraphService) {
    this.graph = graph;
  }

}
