import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  url: string;
  title: string;
  detailId?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  images: GalleryImage[] = [
    { url: 'assets/image2.png', title: 'Diffused Natural Lighting', detailId: 'diffused-natural' },
    { url: 'assets/image3.png', title: 'Harsh Natural Light' },
    { url: 'assets/image4.png', title: 'Diffused Artificial Light' },
    { url: 'assets/image5.png', title: 'Harsh Artificial Light' },
  ];
}
