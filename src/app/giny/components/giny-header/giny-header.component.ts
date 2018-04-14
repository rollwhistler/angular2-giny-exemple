import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giny-header',
  templateUrl: './giny-header.component.html',
  styleUrls: ['./giny-header.component.css']
})
export class GinyHeaderComponent implements OnInit {
  @Input() name;
  
  constructor() { }

  ngOnInit() {
  }

}
