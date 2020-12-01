import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfFromDemoComponent } from './of-from-demo/of-from-demo.component';
import { MapTapDemoComponent } from './map-tap-demo/map-tap-demo.component';
import { ShareDemoComponent } from './share-demo/share-demo.component';

import { HttpClientModule } from '@angular/common/http';
import { SwitchMapDemoComponent } from './switch-map-demo/switch-map-demo.component';
import { DebounceTimeDemoComponent } from './debounce-time-demo/debounce-time-demo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    OfFromDemoComponent,
    MapTapDemoComponent,
    ShareDemoComponent,
    SwitchMapDemoComponent,
    DebounceTimeDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
