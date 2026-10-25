import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery-detail.component.html',
  styleUrl: './gallery-detail.component.css'
})
export class GalleryDetailComponent implements OnInit {
  images: string[] = [];
  category: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('id');
    this.category = category || 'default';
    
    if (this.category === 'diffused-natural') {
      this.images = [
        'assets/gallery/diffused-natural-light/diffused light.png',
        'assets/gallery/diffused-natural-light/diffused light 2.png',
        'assets/gallery/diffused-natural-light/diffused light 3.png',
        'assets/gallery/diffused-natural-light/diffused 4.png',
        'assets/gallery/diffused-natural-light/diffused 5.png',
        'assets/gallery/diffused-natural-light/diffused 6.png'
      ];
    }
  }
}
