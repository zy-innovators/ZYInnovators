import { Component, OnInit, OnDestroy, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../core/services/seo.service';
import { DOMAINS, LEARNING_STAGES, LEADERS } from '../../core/data/site.data';
import { Domain, LearningStage, Leader } from '../../shared/models';

@Component({
  selector: 'zy-home',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  domains: Domain[] = DOMAINS;
  stages: LearningStage[] = LEARNING_STAGES;
  leaders: Leader[] = LEADERS;

  activePhotoIndex = signal<number>(0);
  visibleCount = signal<number>(3);
  private timerId: any;

  photos = [
    'assets/images/photos/WhatsApp Image 2026-06-15 at 11.43.11 AM.jpeg',
    'assets/images/photos/WhatsApp Image 2026-06-15 at 11.43.11 AM (1).jpeg',
    'assets/images/photos/WhatsApp Image 2026-06-15 at 11.43.11 AM (2).jpeg',
    'assets/images/photos/WhatsApp Image 2026-06-15 at 11.44.18 AM.jpeg',
    'assets/images/photos/WhatsApp Image 2026-06-15 at 11.44.33 AM.jpeg',
    'assets/images/photos/IMG-20240901-WA0005.jpg',
    'assets/images/photos/IMG-20250107-WA0024.jpg',
    'assets/images/photos/IMG-20250107-WA0034.jpg',
    'assets/images/photos/IMG-20250108-WA0001.jpg',
    'assets/images/photos/IMG-20250428-WA0016.jpg',
    'assets/images/photos/IMG-20250428-WA0016 (1).jpg',
    'assets/images/photos/IMG-20260104-WA0000.jpg',
    'assets/images/photos/IMG20250428113704.jpg',
    'assets/images/photos/IMG20250428120213.jpg',
    'assets/images/photos/IMG20250428120240.jpg',
    'assets/images/photos/IMG20250502090812.jpg',
    'assets/images/photos/IMG20250502093814.jpg',
    'assets/images/photos/IMG20250502104424.jpg',
    'assets/images/photos/IMG20250502105126.jpg',
    'assets/images/photos/IMG20250503102619.jpg',
    'assets/images/photos/IMG20250503105357.jpg',
    'assets/images/photos/IMG20250503105401.jpg',
    'assets/images/photos/IMG20250503105740.jpg',
    'assets/images/photos/IMG20250503115939.jpg',
    'assets/images/photos/IMG20250503120358_01.jpg',
    'assets/images/photos/IMG20250503120430_01.jpg',
    'assets/images/photos/IMG20251230122450.jpg',
    'assets/images/photos/IMG20260104113023.jpg'
  ];

  constructor(private seoService: SeoService) {}

  @HostListener('window:resize')
  onResize(): void {
    this.updateVisibleCount();
  }

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Home',
      'Zy Innovators empowers students, educators, and institutions through AI, coding, robotics, mathematics, innovation, and experiential learning.',
      'education, innovation, AI, coding, robotics, STEM, teacher training'
    );
    this.updateVisibleCount();
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  updateVisibleCount(): void {
    const width = window.innerWidth;
    if (width <= 576) {
      this.visibleCount.set(1);
    } else if (width <= 992) {
      this.visibleCount.set(2);
    } else {
      this.visibleCount.set(3);
    }
    // Correct activePhotoIndex if it exceeds the new bounds
    const maxIdx = this.photos.length - this.visibleCount();
    if (this.activePhotoIndex() > maxIdx) {
      this.activePhotoIndex.set(maxIdx);
    }
  }

  startCarousel(): void {
    this.timerId = setInterval(() => {
      this.activePhotoIndex.update(idx => {
        const maxIdx = this.photos.length - this.visibleCount();
        return idx >= maxIdx ? 0 : idx + 1;
      });
    }, 3500);
  }

  setPhotoIndex(idx: number): void {
    const maxIdx = this.photos.length - this.visibleCount();
    this.activePhotoIndex.set(Math.min(idx, maxIdx));
  }

  getDots(): number[] {
    const count = this.photos.length - this.visibleCount() + 1;
    return Array.from({ length: Math.max(1, count) }, (_, i) => i);
  }
}

