import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CollectionItem {
  url: string;
  caption?: string;
  metadata?: string;
}

interface GalleryImage {
  url: string;
  title: string;
  detailId?: string;
  collection?: (string | CollectionItem)[];
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
        {
          url: 'assets/gallery/diffused-natural-light/diffused light 2.png',
          caption: 'I captured this image around midday when the sunlight created defined palm tree shadows onto my living room blinds. I used a lower ISO and narrower aperture to manage the bright natural light and prevent any overexposure. Although the shadows are clearly defined, the light is softened because it is passed through the window and blinds, creating diffused natural lighting. I positioned the lamp along the left rule of thirds intersection to balance out the composition, allowing the darker furniture to become a silhouette and contrast against the blinds to make the shadows stand out even more.',
          metadata: 'ISO 110 • f/6.3 • 1/125 • 70.0mm'
        },
        {
          url: 'assets/gallery/diffused-natural-light/diffused light 3.png',
          caption: 'While out on a walk, I noticed some bright yellow flowers contrasting against the darker green foliage. However, I was more intrigued by the flowers within the bush and wanted to capture them in softer lighting. The surrounding leaves diffused the afternoon sunlight, creating even lighting across the petals. I used a shallow depth of field to isolate the flowers and create a soft, blurred background.',
          metadata: 'ISO 4000 • f/6.3 • 1/1000 • 62.0mm'
        },
        {
          url: 'assets/gallery/diffused-natural-light/diffused 4.png',
          caption: 'I decided to focus on a friend\'s dog to create a fill-the-frame composition. The image uses diffused natural light from the cloudy conditions, creating soft, even exposure across the dog’s face, with subtle highlights on the right side of its nose and muzzle. This lighting helps capture the dog’s facial details and fur texture without creating any harsh shadows or overexposed areas. I filled most of the frame with the dog while leaving some green grass visible in the background to create contrast. I particularly like how the strand of grass on the dog’s nose connects the subject with its surroundings and adds a small detail that makes the image a lot more interesting.',
          metadata: 'ISO 2000 • f/7.1 • 1/250 • 70.0mm'
        },
        {
          url: 'assets/gallery/diffused-natural-light/diffused 5.png',
          caption: 'I captured this image on a rainy, overcast day when the bright yellow pedestrian crossing caught my attention against the dark, wet road. The cloudy weather created diffused natural lighting, projecting soft, even illumination without any harsh shadows. The damp surface appeared darker and enhanced the contrast against the bright yellow paint, making it the main focal point. I like how the puddle forming in the centre of the crossing added some texture and reflected the rainy conditions, helping to establish the mood of the scene and guide the viewer’s eye across the frame.',
          metadata: 'ISO 800 • f/4.5 • 1/500 • 70.0mm'
        },
        {
          url: 'assets/gallery/diffused-natural-light/diffused 6.png',
          caption: 'I captured this image while walking along a sandy path towards the beach, where I noticed a bright yellow flower standing out against the surrounding grass. Although it was a sunny day, the flower was positioned in the shade, creating diffused natural lighting and a soft, even exposure without any harsh highlights. I originally had experimented with a wider aperture to achieve a shallow depth of field, but after struggling to focus on the flower, I switched to a smaller aperture to keep more of the scene in focus. The background of the image was blurred in post-production. I made sure to position the flower along the rule of thirds, helping to create a more balanced composition and draw the viewer\'s attention to the subject. The contrast of the yellow petals against the darker green and brown background further reinforced this.',
          metadata: 'ISO 4000 • f/10.0 • 1/3200 • 70.0mm'
        }
      ]
    },
    { url: 'assets/image3.png', title: 'Harsh Natural Light', detailId: 'harsh-natural', collection: [
        'assets/gallery/harsh-natural-light/image 3.png',
        'assets/gallery/harsh-natural-light/harsh 2.png',
        'assets/gallery/harsh-natural-light/harsh 3.png',
        'assets/gallery/harsh-natural-light/harsh 4.png',
        'assets/gallery/harsh-natural-light/harsh 5.png',
        'assets/gallery/harsh-natural-light/harsh 6.png'
      ] },
    { url: 'assets/image4.png', title: 'Diffused Artificial Light', detailId: 'diffused-artificial', collection: [
        'assets/gallery/diffused-artificial-light/diffused artificial2.jpg',
        'assets/gallery/diffused-artificial-light/image 4.png',
        'assets/gallery/diffused-artificial-light/image4.png',
        'assets/gallery/diffused-artificial-light/_DSC2897.jpg2.jpg'
      ] },
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
      this.currentCollectionImages = img.collection.map(item =>
        typeof item === 'string' ? item : item.url
      );
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
    if (this.selectedImageIndex === null) return;

    const categoryImg = this.images.find(img =>
      img.collection && img.collection.some(item =>
        (typeof item === 'string' ? item : item.url) === this.selectedImage
      )
    );

    if (categoryImg && categoryImg.collection) {
      const item = categoryImg.collection[this.selectedImageIndex];
      if (item && typeof item === 'object') {
        this.selectedImageMetadata = {
          caption: item.caption || '',
          meta: item.metadata || ''
        };
      } else {
        // FIX: Use the category caption if the image in the collection is
        // logically the same as the main category image, OR if it's the first image.
        const isFirstImage = this.selectedImageIndex === 0;
        const isMainImage = this.selectedImage === categoryImg.url;

        if (isFirstImage || isMainImage) {
          this.selectedImageMetadata = {
            caption: categoryImg.caption || '',
            meta: categoryImg.metadata || ''
          };
        } else {
          this.selectedImageMetadata = {
            caption: '',
            meta: ''
          };
        }
      }
    } else {
      this.selectedImageMetadata = null;
    }
  }

  get selectedImage() {
    return this.selectedImageIndex !== null 
      ? this.currentCollectionImages[this.selectedImageIndex] 
      : null;
  }
}
