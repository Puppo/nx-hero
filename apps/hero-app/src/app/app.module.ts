import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroListModule } from '@flowing/hero/hero-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HeroListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
