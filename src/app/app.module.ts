import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GinyModule } from './giny/giny.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GinyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
