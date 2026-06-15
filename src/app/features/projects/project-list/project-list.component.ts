import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { PROJECTS } from '../../../core/data/site.data';

@Component({
  selector: 'zy-project-list',
  standalone: true,
  imports: [RouterLink, SlicePipe, AnimateOnScrollDirective],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects = PROJECTS;
  activeCategory = signal<string>('all');
  categories = [
    { key: 'all', label: 'All' }, { key: 'robotics', label: 'Robotics' },
    { key: 'iot', label: 'IoT' }, { key: 'ai', label: 'AI' },
    { key: 'programming', label: 'Programming' }, { key: 'electronics', label: 'Electronics' },
    { key: 'arduino', label: 'Arduino' }
  ];

  pilotProjects = computed(() => {
    const cat = this.activeCategory();
    const list = this.projects.filter(p => p.status === 'pilot');
    return cat === 'all' ? list : list.filter(p => p.category === cat);
  });

  activeProjects = computed(() => {
    const cat = this.activeCategory();
    const list = this.projects.filter(p => p.status === 'active' || !p.status);
    return cat === 'all' ? list : list.filter(p => p.category === cat);
  });

  upcomingProjects = computed(() => {
    const cat = this.activeCategory();
    const list = this.projects.filter(p => p.status === 'upcoming');
    return cat === 'all' ? list : list.filter(p => p.category === cat);
  });

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setPageSeo('Innovation Projects', 'Explore active school pilots, student hardware prototypes, and upcoming research collaborations at Zy Innovators.');
  }

  setCategory(cat: string): void { this.activeCategory.set(cat); }
}
