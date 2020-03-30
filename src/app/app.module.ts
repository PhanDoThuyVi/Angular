import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpiComponent } from './kpi/kpi.component';
import { GeoChartComponent } from './components/geo-chart/geo-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiComponent,
    GeoChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
