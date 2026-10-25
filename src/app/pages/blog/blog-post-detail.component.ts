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
    this.post = BLOG_POSTS.find(p => p.id === id);
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
          html += '<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">';
          inList = true;
        }
        html += `<li class="bg-gray-800/50 p-4 rounded-lg border-l-2 border-gray-600 text-gray-300 text-sm">${trimmed.replace(/^[-*]\s*/, '')}</li>`;
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