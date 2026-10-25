import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  title: string;
  detailId?: string;
  collection?: string[];
  caption?: string;
  metadata?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  selectedCollection: string | null = null;
  currentCollectionImages: string[] = [];
  selectedImageIndex: number | null = null;
  selectedImageMetadata: { caption: string, meta: string } | null = null;

  images: GalleryImage[] = [
    { 
      url: 'assets/image2.png', 
      title: 'Diffused Natural Lighting', 
      detailId: 'diffused-natural',
      metadata: 'ISO 180 • f/5.6 • 1/400 • 48.0mm',
      caption: 'I captured this image during a morning drive, inspired by the contrast between the soft sky, the cows and the dark car interior. I wanted to explore the compositional technique of a frame within a frame, where I used the car window to draw the viewer’s attention towards the landscape. The diffused natural light created a soft, slightly warm atmosphere without being too harsh. Although I had limited time to adjust my settings and some elements did appear slightly blurry, I feel like the motion blur adds a candid, natural look to the photograph.',
      collection: [
        'assets/gallery/diffused-natural-light/diffused light.png',
        'assets/gallery/diffused-natural-light/diffused light 2.png',
        'assets/gallery/diffused-natural-light/diffused light 3.png',
        'assets/gallery/diffused-natural-light/diffused 4.png',
        'assets/gallery/diffused-natural-light/diffused 5.png',
        'assets/gallery/diffused-natural-light/diffused 6.png'
      ]
    },
    { url: 'assets/image3.png', title: 'Harsh Natural Light' },
    { url: 'assets/image4.png', title: 'Diffused Artificial Light' },
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
      this.openLightboxSingle(img);
    }
  }

  openLightbox(index: number) {
    this.selectedImageIndex = index;
    this.updateMetadata();
  }

  openLightboxSingle(img: GalleryImage) {
    this.currentCollectionImages = [img.url];
    this.selectedImageIndex = 0;
    this.selectedImageMetadata = { caption: img.caption || '', meta: img.metadata || '' };
  }

  closeLightbox() {
    this.selectedImageIndex = null;
    this.selectedImageMetadata = null;
  }

  closeCollection() {
    this.selectedCollection = null;
    this.currentCollectionImages = [];
  }

  nextImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.currentCollectionImages.length;
      this.updateMetadata();
    }
  }

  prevImage() {
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex = (this.selectedImageIndex - 1 + this.currentCollectionImages.length) % this.currentCollectionImages.length;
      this.updateMetadata();
    }
  }

  updateMetadata() {
    // To ensure caption ONLY shows for the main representative image of a collection,
    // we check if the current image index is 0 (the first image in the collection)
    // AND if that image corresponds to the main image in the images array.
    
    this.selectedImageMetadata = null; // Reset by default

    if (this.selectedImageIndex === 0) {
      const categoryImg = this.images.find(img => img.detailId === this.selectedCollection);
      if (categoryImg) {
        this.selectedImageMetadata = { 
          caption: categoryImg.caption || '', 
          meta: categoryImg.metadata || '' 
        };
      }
    }
  }

  get selectedImage() {
    return this.selectedImageIndex !== null 
      ? this.currentCollectionImages[this.selectedImageIndex] 
      : null;
  }
}
