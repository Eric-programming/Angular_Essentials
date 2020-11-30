import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfFromDemoComponent } from './of-from-demo/of-from-demo.component';
import { MapTapDemoComponent } from './map-tap-demo/map-tap-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    OfFromDemoComponent,
    MapTapDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
