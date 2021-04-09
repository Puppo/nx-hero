import { Component, Input } from '@angular/core';
import { HeroDTO } from '@flowing/hero/data-access';

@Component({
  selector: 'flw-hero-viewer',
  template: `
    <div class="card">
      <img [src]="hero.image" class="card-img-top" [alt]="hero.name" />
      <div class="card-body">
        <div class="card-text">
          <b>{{ hero.name }}</b>
          <ul>
            <li>Intelligence: {{ hero.powerstats.intelligence }}</li>
            <li>Strength: {{ hero.powerstats.strength }}</li>
            <li>Speed: {{ hero.powerstats.speed }}</li>
            <li>Durability: {{ hero.powerstats.durability }}</li>
            <li>Power: {{ hero.powerstats.power }}</li>
            <li>Combat: {{ hero.powerstats.combat }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      ul {
        padding: 0;
      }
      ul li {
        list-style-type: none;
      }
    `,
  ],
})
export class HeroViewerComponent {
  @Input() hero: HeroDTO;
}
