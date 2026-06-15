import { Component, OnInit, signal, computed } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { GALLERY_ITEMS } from '../../../core/data/site.data';
import { GalleryItem } from '../../../shared/models';

@Component({
  selector: 'zy-gallery-page',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent implements OnInit {
  items = GALLERY_ITEMS;
  activeCategory = signal<string>('all');
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  categories = [
    { key: 'all', label: 'All' }, { key: 'trainings', label: 'Trainings' },
    { key: 'workshops', label: 'Workshops' }, { key: 'events', label: 'Events' },
    { key: 'projects', label: 'Projects' }
  ];

  filteredItems = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? this.items : this.items.filter(i => i.category === cat);
  });

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSeo('Gallery', 'Browse photos from Zy Innovators trainings, workshops, events, and student projects.');
  }

  setCategory(cat: string): void { this.activeCategory.set(cat); }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  nextImage(): void {
    const items = this.filteredItems();
    this.lightboxIndex.update(i => (i + 1) % items.length);
  }

  prevImage(): void {
    const items = this.filteredItems();
    this.lightboxIndex.update(i => i === 0 ? items.length - 1 : i - 1);
  }
}
