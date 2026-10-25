import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 right-0 p-8 z-[9999] flex gap-8 text-white font-sans uppercase tracking-[0.2em] text-xs md:text-sm">
      <a routerLink="/home" 
         routerLinkActive="active-link" 
         class="nav-link cursor-pointer">Home</a>
      <a routerLink="/about" 
         routerLinkActive="active-link" 
         class="nav-link cursor-pointer">About</a>
      <a routerLink="/gallery" 
         routerLinkActive="active-link" 
         class="nav-link cursor-pointer">Gallery</a>
      <a routerLink="/blog" 
         routerLinkActive="active-link" 
         class="nav-link cursor-pointer">Blog</a>
      <a routerLink="/contact" 
         routerLinkActive="active-link" 
         class="nav-link cursor-pointer">Contact</a>
    </nav>
  `,
  styles: `
    .nav-link {
      opacity: 0.6;
      transition: all 0.3s ease;
      border-top: 2px solid transparent;
      padding-top: 4px;
    }
    .nav-link:hover {
      opacity: 1 !important;
      color: white;
    }
    .active-link {
      opacity: 1 !important;
      border-top: 2px solid white !important;
    }
  `
})
export class NavbarComponent {}
