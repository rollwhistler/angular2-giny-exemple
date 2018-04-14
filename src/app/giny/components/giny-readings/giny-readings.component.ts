import { Component, OnInit, Input } from '@angular/core';
import { ReadingServiceInterface } from '../../../utils/models/json-model';

@Component({
  selector: 'app-giny-readings',
  templateUrl: './giny-readings.component.html',
  styleUrls: ['./giny-readings.component.css']
})
export class GinyReadingsComponent implements OnInit {
  @Input() reading: ReadingServiceInterface;
  
  constructor() { }

  ngOnInit() {
  }

}
