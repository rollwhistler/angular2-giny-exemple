import { Component, OnInit, Input } from '@angular/core';
import { ServiceInfoInterface } from '../../../utils/models/json-model';

@Component({
  selector: 'app-giny-example',
  templateUrl: './giny-example.component.html',
  styleUrls: ['./giny-example.component.css']
})
export class GinyExampleComponent implements OnInit {
  @Input() service: ServiceInfoInterface;
  constructor() { }

  ngOnInit() {
  }

}
