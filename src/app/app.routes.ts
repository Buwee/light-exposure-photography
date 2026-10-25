import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryDetailComponent } from './pages/gallery-detail/gallery-detail.component';
import { BlogPostDetailComponent } from './pages/blog/blog-post-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryDetailComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
