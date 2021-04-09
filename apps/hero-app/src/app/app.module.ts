import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeroListModule } from '@flowing/hero/hero-list';
import { BASE_API_URL } from '@flowing/common/tokens';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HeroListModule],
  providers: [
    {
      provide: BASE_API_URL,
      useValue: environment.baseApiUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
