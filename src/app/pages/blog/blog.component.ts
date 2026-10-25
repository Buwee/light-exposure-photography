import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      title: 'The Geometry of Harsh Sunlight',
      date: 'October 25, 2026',
      excerpt: 'An exploration of high-contrast shadows and the stark lines created by the midday sun. Learning to embrace the "ugly" light to find unexpected architectural beauty.',
      imageUrl: 'assets/blog/blog1.jpg',
      imageAlt: 'Harsh sunlight and shadows'
    },
    {
      title: 'Softening the World: Diffused Light',
      date: 'October 12, 2026',
      excerpt: 'How overcast skies and soft-boxes eliminate harsh transitions, creating a dreamy, ethereal quality that is essential for emotive portraiture.',
      imageUrl: 'assets/blog/blog2.jpg',
      imageAlt: 'Soft diffused light'
    },
    {
      title: 'Neon Dreams: Artificial Light Control',
      date: 'September 28, 2026',
      excerpt: 'Moving beyond the sun. A study on how artificial light sources and color gels can completely redefine a subject, transforming a room into a cinematic scene.',
      imageUrl: 'assets/blog/blog3.jpg',
      imageAlt: 'Artificial neon lighting'
    },
    {
      title: 'Golden Hour: The Natural Peak',
      date: 'September 15, 2026',
      excerpt: 'Capturing the fleeting moments of the golden hour, where the angle of the sun creates a warmth and depth that no studio light can truly replicate.',
      imageUrl: 'assets/blog/blog4.jpg',
      imageAlt: 'Golden hour natural light'
    }
  ];
}
