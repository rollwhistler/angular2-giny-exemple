import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonModel } from '../models/json-model';

@Injectable()
export class JsonParserService {
  
  ginyJsonUrl = "http://meteo.cat/a/saber/on/es/exemple.json";

  constructor(private http: HttpClient) { }
  
  getJson(): JsonModel{
    //return this.http.get(this.ginyJsonUrl);    
    //We use some sample data for now;
    return {
      services: [{
        name: "example",
        readings: [{
          time: new Date(),
          temperature: 24,
          rain_probability: 10
        }]
      }]
    }
  }
}
