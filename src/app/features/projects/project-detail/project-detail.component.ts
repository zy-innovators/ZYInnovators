import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { PROJECTS } from '../../../core/data/site.data';
import { Project } from '../../../shared/models';

@Component({
  selector: 'zy-project-detail',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  template: `
    @if (project(); as p) {
      <section class="page-hero"><div class="page-hero-bg"></div><div class="container page-hero-content">
        <a routerLink="/projects" class="back-link animate-fade-in-down"><span class="material-icons-outlined">arrow_back</span> All Projects</a>
        <h1 class="heading-hero animate-fade-in-up">{{ p.title }}</h1>
        <p class="page-hero-subtitle animate-fade-in-up" style="animation-delay:200ms">{{ p.description }}</p>
      </div></section>
      <section class="section"><div class="container">
        <div class="detail-grid">
          <div class="detail-main reveal" zyAnimateOnScroll>
            <div class="project-image-large"><div class="image-placeholder"><span class="material-icons-outlined">science</span></div></div>
            <h2 class="heading-2 mt-6">About This Project</h2>
            <div class="divider"></div>
            <p class="detail-text">{{ p.description }}</p>
          </div>
          <aside class="detail-sidebar reveal" zyAnimateOnScroll [delay]="200">
            <div class="sidebar-card">
              <div class="sidebar-section"><h4 class="sidebar-label">Technologies</h4>
                <div class="tech-tags">@for (t of p.technologies; track t) { <span class="tech-tag">{{ t }}</span> }</div>
              </div>
              <div class="sidebar-section"><h4 class="sidebar-label">Learning Outcomes</h4>
                <ul class="outcomes-list">@for (o of p.learningOutcomes; track o) {
                  <li><span class="material-icons-outlined">check_circle</span> {{ o }}</li>
                }</ul>
              </div>
              <div class="sidebar-section"><h4 class="sidebar-label">Category</h4>
                <span class="badge">{{ p.category }}</span>
              </div>
            </div>
          </aside>
        </div>
      </div></section>
    } @else {
      <section class="section"><div class="container text-center">
        <span class="material-icons-outlined" style="font-size:4rem;color:var(--color-text-light)">search_off</span>
        <h2 class="heading-2 mt-4">Project Not Found</h2>
        <a routerLink="/projects" class="btn btn-outline btn-lg mt-6"><span class="material-icons-outlined">arrow_back</span> View All Projects</a>
      </div></section>
    }
  `,
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project = signal<Project | null>(null);

  constructor(private route: ActivatedRoute, private seoService: SeoService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const found = PROJECTS.find(p => p.slug === params['slug']);
      this.project.set(found || null);
      if (found) this.seoService.setPageSeo(found.title, found.description);
    });
  }
}
