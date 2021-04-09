import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroUiModule } from '@flowing/hero/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
