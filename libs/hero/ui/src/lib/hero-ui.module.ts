import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewerComponent } from './components/hero-viewer/hero-viewer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroViewerComponent],
  exports: [HeroViewerComponent],
})
export class HeroUiModule {}
