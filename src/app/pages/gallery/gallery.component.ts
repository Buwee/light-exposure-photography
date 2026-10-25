import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GalleryImage {
  url: string;
  title: string;
  detailId?: string;
  collection?: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedCollection: string | null = null;
  currentCollectionImages: string[] = [];
  selectedImageIndex: number | null = null;

  images: GalleryImage[] = [
    {
      url: 'assets/image2.png',
      title: 'Diffused Natural Lighting',
      detailId: 'diffused-natural',
      collection: [
        'assets/gallery/diffused-natural-light/diffused light.png',
        'assets/gallery/diffused-natural-light/diffused light 2.png',
        'assets/gallery/diffused-natural-light/diffused light 3.png',
        'assets/gallery/diffused-natural-light/diffused 4.png',
        'assets/gallery/diffused-natural-light/diffused 5.png',
        'assets/gallery/diffused-natural-light/diffused 6.png'
      ]
    },
    {
      url: 'assets/image3.png',
      title: 'Harsh Natural Light',
      detailId: 'harsh-natural',
      collection: [
        'assets/gallery/harsh-natural-light/image 3.png',
        'assets/gallery/harsh-natural-light/harsh 2.png',
        'assets/gallery/harsh-natural-light/harsh 3.png',
        'assets/gallery/harsh-natural-light/harsh 4.png',
        'assets/gallery/harsh-natural-light/harsh 5.png',
        'assets/gallery/harsh-natural-light/harsh 6.png'
      ]
    },
    {
      url: 'assets/image4.png',
      title: 'Diffused Artificial Light',
      detailId: 'diffused-artificial',
      collection: [
        'assets/gallery/diffused-artificial-light/image4.png',
        'assets/gallery/diffused-artificial-light/diffused artificial2.jpg',
        'assets/gallery/diffused-artificial-light/_DSC2897.jpg2.jpg'
      ]
    },
    {
      url: 'assets/image5.png',
      title: 'Harsh Artificial Light',
      detailId: 'harsh-artificial',
      collection: [
        'assets/gallery/harsh-artificial-light/1.png',
        'assets/gallery/harsh-artificial-light/2.png',
        'assets/gallery/harsh-artificial-light/3.png',
        'assets/gallery/harsh-artificial-light/gg.png',
        'assets/gallery/harsh-artificial-light/image 5.png',
        'assets/gallery/harsh-artificial-light/pic.png'
      ]
    },
  ];

  openCollection(img: GalleryImage) {
    if (img.collection) {
      this.selectedCollection = img.detailId || '';
      this.currentCollectionImages = img.collection;
    } else {
      this.openLightboxSingle(img.url);
    }
  }

  openLightbox(index: number) {
    this.selectedImageIndex = index;
  }

  openLightboxSingle(url: string) {
    this.currentCollectionImages = [url];
    this.selectedImageIndex = 0;
  }

  closeLightbox() {
    this.selectedImageIndex = null;
  }

  closeCollection() {
    this.selectedCollection = null;
    this.currentCollectionImages = [];
  }

  nextImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.currentCollectionImages.length;
    }
  }

  prevImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.currentCollectionImages.length) % this.currentCollectionImages.length;
    }
  }

  get selectedImage() {
    return this.selectedImageIndex !== null
      ? this.currentCollectionImages[this.selectedImageIndex]
      : null;
  }
}
