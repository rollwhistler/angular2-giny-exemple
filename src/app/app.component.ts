import { Component, OnInit } from '@angular/core';
import { JsonModel } from './utils/models/json-model';
import { JsonParserService } from './utils/services/json-parser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  json: JsonModel;

  constructor(private services: JsonParserService) {

  }

  ngOnInit(){
    this.json = this.services.getJson();

    /*
      this.services.getJson().subscribe((data: JsonModel)=>{
        this.json = data;
      })
    */ 
  }
}
