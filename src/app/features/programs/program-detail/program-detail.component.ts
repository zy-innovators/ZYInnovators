import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { PROGRAMS } from '../../../core/data/programs.data';
import { Program } from '../../../shared/models';

@Component({
  selector: 'zy-program-detail',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css'
})
export class ProgramDetailComponent implements OnInit {
  program = signal<Program | null>(null);
  openFaq = signal<number | null>(null);

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const found = PROGRAMS.find(p => p.slug === slug);
      this.program.set(found || null);

      if (found) {
        this.seoService.setPageSeo(
          found.title,
          found.description,
          found.category + ', education, training'
        );
      }
    });
  }

  toggleFaq(index: number): void {
    this.openFaq.update(v => v === index ? null : index);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'teacher-training': 'Teacher Training',
      'workshops': 'Workshop',
      'student-programs': 'Student Program'
    };
    return labels[category] || category;
  }
}
