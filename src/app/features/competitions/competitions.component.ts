import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'zy-competitions',
  standalone: true,
  imports: [AnimateOnScrollDirective, RouterLink],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.css'
})
export class CompetitionsComponent implements OnInit {
  dataService = inject(DataService);
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Student Competitions',
      'Participate in Zy Innovators quiz and academic challenges, including General Knowledge (GK), Mathematics, Science & Innovation, IT Coding, and Short Video creation.'
    );
  }
}
