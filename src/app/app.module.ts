import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CityComponent } from './components/city/city.component';
import { FiveComponent } from './components/fiveDays/five.component'

import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CityComponent,
    FiveComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
