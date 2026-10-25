import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOG_POSTS } from './blog';

@Component({
  selector: 'app-blog-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post-detail.component.html',
  styleUrl: './blog-post-detail.component.css'
})
export class BlogPostDetailComponent {
  post: any;

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    const postData = BLOG_POSTS.find(p => p.id === id);
    if (postData) {
      this.post = { ...postData };
      this.syncLikeStatus();
    }
  }

  syncLikeStatus() {
    const likes = JSON.parse(localStorage.getItem('blog_likes') || '{}');
    this.post.isLiked = !!likes[this.post.id];
  }

  toggleLike(event: Event) {
    event.stopPropagation();
    const likes = JSON.parse(localStorage.getItem('blog_likes') || '{}');
    const currentStatus = !!likes[this.post.id];

    likes[this.post.id] = !currentStatus;
    localStorage.setItem('blog_likes', JSON.stringify(likes));

    this.post.isLiked = !currentStatus;
    this.post.likes += this.post.isLiked ? 1 : -1;
  }

  formatBlogContent(content: string): string {
    if (!content) return '';

    const lines = content.split('\n');
    let html = '';
    let inList = false;

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += '<div class="py-4"></div>';
        return;
      }

      if (trimmed.length < 60 && !trimmed.startsWith('-') && !trimmed.startsWith('*') && (index === 0 || lines[index-1].trim() === '')) {
        const nextLine = lines[index+1]?.trim();
        if (nextLine && nextLine.length > 50) {
          html += `<h4 class="text-white font-serif text-2xl mt-8 mb-4">${trimmed}</h4>`;
          return;
        }
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || (trimmed.length < 40 && !trimmed.includes('.') && !trimmed.includes(':'))) {
        if (!inList) {
          html += '<ul class="list-disc list-inside space-y-2 my-6 text-gray-400">';
          inList = true;
        }
        html += `<li class="pl-2">${trimmed.replace(/^[-*]\s*/, '')}</li>`;
      } else {
        if (inList) {
          html += '</ul>';
          inList = false;
        }
        html += `<p class="mb-4">${trimmed}</p>`;
      }
    });

    if (inList) html += '</ul>';
    return html;
  }
}