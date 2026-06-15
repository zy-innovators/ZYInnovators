import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { RESOURCES } from '../../../core/data/site.data';
import { Resource } from '../../../shared/models';

interface LocalTopicResource {
  title: string;
  file: string;
  size: string;
  path: string;
}

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

  topicResources: Record<string, LocalTopicResource[]> = {
    python: [
      { title: 'Python Book', file: 'Python Book.pdf', size: '711 KB', path: 'assets/Resources/Python/Python Book.pdf' },
      { title: 'Python Workbook for Students', file: 'Python Workbook for Students.pdf', size: '291 KB', path: 'assets/Resources/Python/Python Workbook for Students.pdf' },
      { title: 'Python Workbook for Teachers', file: 'Python Workbook for Teachers.pdf', size: '905 KB', path: 'assets/Resources/Python/Python Workbook for Teachers.pdf' },
      { title: 'Python Workbook Answer Key (For Students)', file: 'Python Workbook Answer Key (For Students).pdf', size: '649 KB', path: 'assets/Resources/Python/Python Workbook Answer Key (For Students).pdf' }
    ],
    abacus: [
      { title: 'Abacus Level 1 Workbook', file: 'Level1.pdf', size: '5.4 MB', path: 'assets/Resources/Abacus/Level1.pdf' },
      { title: 'Abacus Level 2 Workbook', file: 'Level2.pdf', size: '2.0 MB', path: 'assets/Resources/Abacus/Level2.pdf' },
      { title: 'Abacus Level 3 Workbook', file: 'Level3.pdf', size: '2.7 MB', path: 'assets/Resources/Abacus/Level3.pdf' },
      { title: 'Abacus Level 5 Workbook', file: 'Level5.pdf', size: '1.8 MB', path: 'assets/Resources/Abacus/Level5.pdf' },
      { title: 'Abacus Level 6 Workbook', file: 'Level6.pdf', size: '2.4 MB', path: 'assets/Resources/Abacus/Level6.pdf' },
      { title: 'Abacus Level 7 Workbook', file: 'Level7.pdf', size: '2.3 MB', path: 'assets/Resources/Abacus/Level7.pdf' },
      { title: 'Abacus Level 8 Workbook', file: 'Level8.pdf', size: '2.6 MB', path: 'assets/Resources/Abacus/Level8.pdf' }
    ],
    science: [
      { title: 'My Beautiful Body - Gift of God', file: 'My Beautiful Body - Gift of God.pdf', size: '301 KB', path: 'assets/Resources/science/My Beautiful Body - Gift of God.pdf' },
      { title: 'میرا خوبصورت جسم - خدا کا تحفہ (Urdu)', file: 'میرا خوبصورت جسم - خدا کا تحفہ.pdf', size: '725 KB', path: 'assets/Resources/science/میرا خوبصورت جسم - خدا کا تحفہ.pdf' }
    ]
  };

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

  getTopicResources(): LocalTopicResource[] {
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
}
