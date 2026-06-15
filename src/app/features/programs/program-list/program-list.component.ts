import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { PROGRAMS } from '../../../core/data/programs.data';
import { Program, ProgramCategory } from '../../../shared/models';

@Component({
  selector: 'zy-program-list',
  standalone: true,
  imports: [RouterLink, SlicePipe, AnimateOnScrollDirective],
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent implements OnInit {
  programs = PROGRAMS;
  activeCategory = signal<string>('all');

  categories = [
    { key: 'all', label: 'All Programs' },
    { key: 'teacher-training', label: 'Teacher Training' },
    { key: 'workshops', label: 'Workshops' },
    { key: 'student-programs', label: 'Student Programs' }
  ];

  filteredPrograms = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.programs;
    return this.programs.filter(p => p.category === cat);
  });

  constructor(
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Programs',
      'Explore Zy Innovators programs: teacher training, workshops, and student programs in AI, coding, robotics, and more.'
    );

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.activeCategory.set(params['category']);
      }
    });
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'teacher-training': 'Teacher Training',
      'workshops': 'Workshop',
      'student-programs': 'Student Program',
      'innovation-labs': 'Innovation Lab',
      'ai-programs': 'AI Program'
    };
    return labels[category] || category;
  }
}
