import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocDashboardComponent } from './soc-dashboard/soc-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SocFixturesComponent } from './soc-fixtures/soc-fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    SocDashboardComponent,
    SocFixturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
