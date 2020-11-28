import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**
 * It manages the complex relationships between views
 * (components & directives) and data providers (services, guard) to define their relationships in a single file.
 */
@NgModule({
  declarations: [
    AppComponent,
    //We can put any directives, components, pipes available to only this module
  ],
  exports: [
    //We can put any directives, components, pipes to make them available to other modules
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    //Gain access to other modules
  ],
  providers: [
    //Register data providers like services and guards to inject into components within this module
  ],
  bootstrap: [
    AppComponent,
    //Initially Load your application
  ],
})
export class AppModule {}
