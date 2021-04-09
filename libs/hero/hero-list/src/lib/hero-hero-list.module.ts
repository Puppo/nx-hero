import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewerComponent } from './components/hero-viewer/hero-viewer.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroViewerComponent, HeroListComponent],
  exports: [HeroViewerComponent, HeroListComponent],
})
export class HeroListModule {}
