import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { GinyExampleComponent } from './containers/giny-example/giny-example.component';
import { GinyHeaderComponent } from './components/giny-header/giny-header.component';
import { GinyReadingsComponent } from './components/giny-readings/giny-readings.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsModule
  ],
  declarations: [GinyExampleComponent, GinyHeaderComponent, GinyReadingsComponent],
  exports: [GinyExampleComponent]
})
export class GinyModule { }
