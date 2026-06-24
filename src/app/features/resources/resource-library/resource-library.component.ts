import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { RESOURCES } from '../../../core/data/site.data';
import { Resource } from '../../../shared/models';
import { TOPIC_RESOURCES, GeneratedTopicResource } from '../../../core/data/generated-resources';

@Component({
  selector: 'zy-resource-library',
  standalone: true,
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './resource-library.component.html',
  styleUrl: './resource-library.component.css'
})
export class ResourceLibraryComponent implements OnInit {
  resources = RESOURCES;
  activeCategory = signal<string>('all');
  searchQuery = signal<string>('');
  topic = signal<string | null>(null);

  topicResources = TOPIC_RESOURCES;

  categories = [
    { key: 'all', label: 'All Resources' },
    { key: 'books', label: 'Books' },
    { key: 'teacher-manuals', label: 'Teacher Manuals' },
    { key: 'student-workbooks', label: 'Student Workbooks' },
    { key: 'answer-keys', label: 'Answer Keys' },
    { key: 'presentations', label: 'Presentations' }
  ];

  filteredResources = computed(() => {
    let result = this.resources;
    const cat = this.activeCategory();
    const query = this.searchQuery().toLowerCase();

    if (cat !== 'all') {
      result = result.filter(r => r.category === cat);
    }
    if (query) {
      result = result.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tags.some(t => t.toLowerCase().includes(query))
      );
    }
    return result;
  });

  constructor(
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Resource Library',
      'Browse educational resources developed by Zy Innovators: books, manuals, workbooks, presentations, and more.'
    );

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.activeCategory.set(params['category']);
      }
      if (params['topic']) {
        this.topic.set(params['topic']);
      } else {
        this.topic.set(null);
      }
    });
  }

  getTopicResources(): GeneratedTopicResource[] {
    const t = this.topic();
    return t ? (this.topicResources[t] || []) : [];
  }

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'books': 'Book', 'teacher-manuals': 'Teacher Manual', 'student-workbooks': 'Workbook',
      'answer-keys': 'Answer Key', 'presentations': 'Presentation', 'videos': 'Video',
      'external-resources': 'External', 'downloads': 'Download'
    };
    return labels[category] || category;
  }

  getTopicIcon(): string {
    const t = this.topic();
    const icons: Record<string, string> = {
      'python': 'code',
      'abacus': 'calculate',
      'maths': 'bolt',
      'science': 'science',
      'probsolv': 'psychology',
      'gofer': 'functions',
      'fp-pyjs': 'code',
      'economics': 'trending_up',
      'proj-mgmt': 'assignment'
    };
    return t ? (icons[t] || 'menu_book') : 'menu_book';
  }

  getTopicTitle(): string {
    const t = this.topic();
    const titles: Record<string, string> = {
      'python': 'Python Programming',
      'abacus': 'Abacus & Tangram',
      'maths': 'Speed Mathematics',
      'science': 'Science',
      'probsolv': 'Problem Solving Guide',
      'gofer': 'Gofer Functional Programming',
      'fp-pyjs': 'Functional Programming (Python/JS)',
      'economics': 'Economics',
      'proj-mgmt': 'Project Management'
    };
    return t ? (titles[t] || t) : '';
  }

  getTopicColor(): string {
    const t = this.topic();
    const colors: Record<string, string> = {
      'python': 'rgba(37,99,235,0.08)',
      'abacus': 'rgba(16,185,129,0.08)',
      'maths': 'rgba(245,158,11,0.08)',
      'science': 'rgba(239,68,68,0.08)',
      'probsolv': 'rgba(139,92,246,0.08)',
      'gofer': 'rgba(20,184,166,0.08)',
      'fp-pyjs': 'rgba(236,72,153,0.08)',
      'economics': 'rgba(16,185,129,0.08)',
      'proj-mgmt': 'rgba(107,114,128,0.08)'
    };
    return t ? (colors[t] || 'rgba(0,0,0,0.08)') : 'rgba(0,0,0,0.08)';
  }

  getTopicIconColor(): string {
    const t = this.topic();
    const colors: Record<string, string> = {
      'python': 'var(--color-primary)',
      'abacus': 'var(--color-success)',
      'maths': 'var(--color-warning)',
      'science': 'var(--color-accent)',
      'probsolv': '#8B5CF6',
      'gofer': '#14B8A6',
      'fp-pyjs': '#EC4899',
      'economics': 'var(--color-success)',
      'proj-mgmt': '#6B7280'
    };
    return t ? (colors[t] || 'var(--color-primary)') : 'var(--color-primary)';
  }

  isExternalUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }
}
