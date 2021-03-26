import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarStackedHorizontalComponent } from './bar-stacked-horizontal/bar-stacked-horizontal.component';
import { AnalysisUtilitiesService } from './analysis-utilities.service';

@NgModule({
  declarations: [
    AppComponent,
    BarStackedHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AnalysisUtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
