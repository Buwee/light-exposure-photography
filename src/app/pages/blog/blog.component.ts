import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  likes: number;
  isLiked: boolean;
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
      imageAlt: 'Harsh sunlight and shadows',
      likes: 124,
      isLiked: false
    },
    {
      title: 'Softening the World: Diffused Light',
      date: 'October 12, 2026',
      excerpt: 'How to use softboxes and natural clouds to create smooth gradients and flattering skin tones.',
      imageUrl: 'assets/blog/blog2.jpg',
      imageAlt: 'Soft diffused light',
      likes: 89,
      isLiked: false
    },
    {
      title: 'Neon Dreams: Artificial Light Control',
      date: 'September 28, 2026',
      excerpt: 'Moving beyond the sun. A study on how artificial light sources and color gels can completely redefine a subject, transforming a room into a cinematic scene.',
      imageUrl: 'assets/blog/blog3.jpg',
      imageAlt: 'Artificial neon lighting',
      likes: 210,
      isLiked: false
    },
    {
      title: 'Golden Hour: the Natural Peak',
      date: 'September 15, 2026',
      excerpt: 'Capturing the fleeting moments of the golden hour, where the angle of the sun creates a warmth and depth that no studio light can truly replicate.',
      imageUrl: 'assets/blog/blog4.jpg',
      imageAlt: 'Golden hour natural light',
      likes: 342,
      isLiked: false
    }
  ];

  toggleLike(post: BlogPost) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }
}
