import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService, TrainingWorkshop } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'zy-training-workshop',
  standalone: true,
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './training-workshop.component.html',
  styleUrl: './training-workshop.component.css'
})
export class TrainingWorkshopComponent implements OnInit {
  dataService = inject(DataService);
  private seoService = inject(SeoService);

  activeTab = signal<'all' | 'students' | 'teachers'>('all');

  filteredItems = computed(() => {
    const tab = this.activeTab();
    const items = this.dataService.trainingWorkshops();
    if (tab === 'all') return items;
    return items.filter(item => item.category === tab);
  });

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Training & Workshops',
      'Explore Zy Innovators teacher training programs and student STEM workshops on AI, coding, abacus, speed mathematics, entrepreneurship, and economics.'
    );
  }

  setTab(tab: 'all' | 'students' | 'teachers'): void {
    this.activeTab.set(tab);
  }

  hasLinkResources(item: TrainingWorkshop): boolean {
    return !!item.resources?.some(res => !!res.url);
  }
}
