import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'zy-vision-mission', standalone: true, imports: [AnimateOnScrollDirective],
  template: `
    <section class="page-hero"><div class="page-hero-bg"></div><div class="container page-hero-content">
      <span class="badge animate-fade-in-down">About Us</span>
      <h1 class="heading-hero animate-fade-in-up">Vision & <span class="text-gradient">Mission</span></h1>
    </div></section>
    <section class="section"><div class="container container-narrow">
      <div class="vm-block reveal" zyAnimateOnScroll>
        <div class="vm-icon"><span class="material-icons-outlined">visibility</span></div>
        <h2 class="heading-2">Our Vision</h2>
        <div class="divider"></div>
        <p class="vm-text">To create an educational ecosystem where every student, regardless of background, has access to world-class innovation, technology-driven learning, and the tools to become a creator and leader in an AI-driven future.</p>
      </div>
      <div class="vm-block reveal" zyAnimateOnScroll [delay]="200">
        <div class="vm-icon"><span class="material-icons-outlined">rocket_launch</span></div>
        <h2 class="heading-2">Our Mission</h2>
        <div class="divider"></div>
        <p class="vm-text">To empower students, educators, and institutions through comprehensive programs in AI, coding, robotics, mathematics, and innovation. We develop world-class educational resources, deliver transformative training experiences, and build a community of innovators who will shape the future.</p>
      </div>
      <div class="values-grid reveal" zyAnimateOnScroll [delay]="300">
        <h2 class="heading-2 text-center mb-8">Our Values</h2>
        <div class="values-cards">
          <div class="value-card"><span class="material-icons-outlined">lightbulb</span><h4>Innovation</h4><p>Constantly pushing boundaries in educational methodology and technology integration.</p></div>
          <div class="value-card"><span class="material-icons-outlined">groups</span><h4>Inclusivity</h4><p>Making quality education accessible to all students and educators.</p></div>
          <div class="value-card"><span class="material-icons-outlined">workspace_premium</span><h4>Excellence</h4><p>Maintaining the highest standards in curriculum, delivery, and outcomes.</p></div>
          <div class="value-card"><span class="material-icons-outlined">handshake</span><h4>Collaboration</h4><p>Building strong partnerships with institutions for collective growth.</p></div>
        </div>
      </div>
    </div></section>
  `,
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent implements OnInit {
  constructor(private seoService: SeoService) {}
  ngOnInit(): void { this.seoService.setPageSeo('Vision & Mission', 'Discover the vision, mission, and values driving Zy Innovators\' educational innovation platform.'); }
}
