import { Component } from '@angular/core';
import { HeroApiService } from '@flowing/hero/data-access';

@Component({
  selector: 'flw-hero-list',
  template: `
    <div class="flw-hero-list flex row">
      <div class="col-4" *ngFor="let hero of heros$ | async">
        <flw-hero-viewer [hero]="hero"></flw-hero-viewer>
      </div>
    </div>
  `,
  styles: [
    `
      .flw-hero-list {
        margin: 20px 0;
      }
    `,
  ],
})
export class HeroListComponent {
  heros$ = this.heroApiSv.getHeros();
  constructor(protected heroApiSv: HeroApiService) {}
}
