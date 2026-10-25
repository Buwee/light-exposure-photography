import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExposureSliderComponent, PhotoEffect } from '../../components/exposure-slider/exposure-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ExposureSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  brightness: number = 100;
  effect: PhotoEffect = 'none';

  onExposureChange(value: number) {
    this.brightness = value;
  }

  onEffectChange(effect: PhotoEffect) {
    this.effect = effect;
  }

  onReset() {
    this.brightness = 100;
    this.effect = 'none';
  }

  getFilterString() {
    let filters = [];
    filters.push(`brightness(${this.brightness}%)`);

    if (this.effect === 'grayscale') {
      filters.push('grayscale(100%)');
    } else if (this.effect === 'sepia') {
      filters.push('sepia(100%)');
    } else if (this.effect === 'cyanotype') {
      filters.push('sepia(100%) hue-rotate(180deg) saturate(200%)');
    } else if (this.effect === 'duotone') {
      filters.push('grayscale(100%) sepia(100%) hue-rotate(160deg) saturate(500%)');
    } else if (this.effect === 'grain') {
      filters.push('contrast(140%) brightness(90%) saturate(80%)');
    } else if (this.effect === 'vignette') {
      filters.push('brightness(100%)');
    } else if (this.effect === 'lightleaks') {
      filters.push('contrast(110%) saturate(120%)');
    }

    return filters.join(' ');
  }
}
