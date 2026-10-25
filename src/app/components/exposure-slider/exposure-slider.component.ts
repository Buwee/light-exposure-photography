import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type PhotoEffect = 'none' | 'grayscale' | 'sepia' | 'cyanotype' | 'duotone' | 'grain' | 'vignette' | 'grid' | 'lightleaks';

@Component({
  selector: 'app-exposure-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exposure-slider.component.html',
  styleUrl: './exposure-slider.component.css'
})
export class ExposureSliderComponent {
  @Output() exposureChanged = new EventEmitter<number>();
  @Output() effectChanged = new EventEmitter<PhotoEffect>();
  @Output() resetRequested = new EventEmitter<void>();

  exposureValue: number = 100;
  currentEffect: PhotoEffect = 'none';
  showAdvanced: boolean = false;

  updateExposure(event: any) {
    this.exposureValue = event.target.value;
    this.exposureChanged.emit(this.exposureValue);
  }

  setEffect(effect: PhotoEffect) {
    this.currentEffect = effect;
    this.effectChanged.emit(effect);
  }

  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }

  reset() {
    this.exposureValue = 100;
    this.currentEffect = 'none';
    this.showAdvanced = false; // Close the advanced menu
    this.exposureChanged.emit(100);
    this.effectChanged.emit('none');
    this.resetRequested.emit();
  }
}
