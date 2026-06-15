import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'zy-lab-page',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  template: `
    <section class="page-hero"><div class="page-hero-bg"></div><div class="container page-hero-content">
      <span class="badge animate-fade-in-down">Coming Soon</span>
      <h1 class="heading-hero animate-fade-in-up">Innovation <span class="text-gradient">Lab</span></h1>
      <p class="page-hero-subtitle animate-fade-in-up" style="animation-delay:200ms">
        A dedicated space where students and educators experiment, prototype, and innovate with cutting-edge technologies.
      </p>
    </div></section>

    <section class="section"><div class="container">
      <div class="lab-grid">
        <div class="lab-card reveal" zyAnimateOnScroll>
          <div class="lab-icon"><span class="material-icons-outlined">precision_manufacturing</span></div>
          <h3 class="heading-3">Robotics Lab</h3>
          <p class="text-muted">Design, build, and test robots with industrial-grade components and tools.</p>
        </div>
        <div class="lab-card reveal" zyAnimateOnScroll [delay]="100">
          <div class="lab-icon"><span class="material-icons-outlined">memory</span></div>
          <h3 class="heading-3">Electronics Workbench</h3>
          <p class="text-muted">Circuit design, PCB prototyping, soldering stations, and component testing.</p>
        </div>
        <div class="lab-card reveal" zyAnimateOnScroll [delay]="200">
          <div class="lab-icon"><span class="material-icons-outlined">code</span></div>
          <h3 class="heading-3">Coding Studio</h3>
          <p class="text-muted">High-performance workstations for AI/ML training, app development, and data science.</p>
        </div>
        <div class="lab-card reveal" zyAnimateOnScroll [delay]="300">
          <div class="lab-icon"><span class="material-icons-outlined">hub</span></div>
          <h3 class="heading-3">IoT Hub</h3>
          <p class="text-muted">Connected device prototyping with sensors, microcontrollers, and cloud platforms.</p>
        </div>
      </div>

      <div class="lab-cta reveal" zyAnimateOnScroll>
        <h2 class="heading-2">Interested in setting up an Innovation Lab?</h2>
        <p class="text-muted mt-4">We help schools and colleges establish fully equipped innovation labs.</p>
        <a href="mailto:zyinnovators&#64;gmail.com?subject=Innovation Lab Inquiry" class="btn btn-primary btn-lg mt-6" id="lab-cta">
          <span class="material-icons-outlined">email</span> Get In Touch
        </a>
      </div>
    </div></section>
  `,
  styleUrl: './lab-page.component.css'
})
export class LabPageComponent implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit(): void {
    this.seoService.setPageSeo('Innovation Lab', 'Explore the Zy Innovators Innovation Lab: robotics, electronics, coding, and IoT prototyping spaces.');
  }
}
