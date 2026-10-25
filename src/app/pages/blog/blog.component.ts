import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = BLOG_POSTS.map(post => ({
    ...post,
    isLiked: this.checkLikeStatus(post.id)
  }));

  checkLikeStatus(id: string): boolean {
    const likes = JSON.parse(localStorage.getItem('blog_likes') || '{}');
    return !!likes[id];
  }

  toggleLike(post: any, event: Event) {
    event.stopPropagation();

    const likes = JSON.parse(localStorage.getItem('blog_likes') || '{}');
    const currentStatus = !!likes[post.id];

    likes[post.id] = !currentStatus;
    localStorage.setItem('blog_likes', JSON.stringify(likes));

    post.isLiked = !currentStatus;
    post.likes += post.isLiked ? 1 : -1;
  }
}