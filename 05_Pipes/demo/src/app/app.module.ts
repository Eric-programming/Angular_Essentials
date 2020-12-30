import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IsPalindromePipe } from './custom-pipes/is-palindrome.pipe';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { FormsModule } from '@angular/forms';
import { PipesAdvancedComponent } from './pipes-advanced/pipes-advanced.component';
import { FilterPersonPipe } from './custom-pipes/filter-person.pipe';

@NgModule({
  declarations: [AppComponent, IsPalindromePipe, PipesDemoComponent, PipesAdvancedComponent, FilterPersonPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
