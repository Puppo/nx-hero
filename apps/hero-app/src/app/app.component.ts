import { Component } from '@angular/core';
import { HeroApiService } from '@flowing/hero/data-access';

@Component({
  selector: 'flw-root',
  template: `
    <div class="flw-root flex row">
      <div class="col-4" *ngFor="let hero of heros$ | async">
        <flw-hero-viewer [hero]="hero"></flw-hero-viewer>
      </div>
    </div>
  `,
  styles: [
    `
      .flw-root {
        margin: 20px 0;
      }
    `,
  ],
})
export class AppComponent {
  heros$ = this.heroApiSv.getHeros();
  constructor(protected heroApiSv: HeroApiService) {}
}
