import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { PARTNERS } from '../../../core/data/site.data';
import { Partner } from '../../../shared/models';

@Component({
  selector: 'zy-partnerships', standalone: true, imports: [AnimateOnScrollDirective],
  template: `
    <section class="page-hero"><div class="page-hero-bg"></div><div class="container page-hero-content">
      <span class="badge animate-fade-in-down">Our Network</span>
      <h1 class="heading-hero animate-fade-in-up">Partner <span class="text-gradient">Network</span></h1>
      <p class="page-hero-subtitle animate-fade-in-up" style="animation-delay:200ms">Collaborating with leading educational institutions and organizations.</p>
    </div></section>
    <section class="section"><div class="container">
      @for (type of partnerTypes; track type.key) {
        <div class="partner-section reveal" zyAnimateOnScroll>
          <h2 class="heading-2">{{ type.label }}</h2>
          <div class="divider"></div>
          <div class="partners-grid">
            @for (p of getPartnersByType(type.key); track p.id) {
              <div class="partner-card">
                <div class="partner-logo-placeholder">
                  <span class="material-icons-outlined">{{ type.icon }}</span>
                </div>
                <span class="partner-name">{{ p.name }}</span>
              </div>
            }
          </div>
        </div>
      }
      <div class="partner-cta reveal" zyAnimateOnScroll>
        <h2 class="heading-2">Become a Partner</h2>
        <p class="text-muted mt-4">Join our growing network of educational institutions and organizations.</p>
        <a href="mailto:zyinnovators&#64;gmail.com?subject=Partnership Inquiry" class="btn btn-primary btn-lg mt-6">
          <span class="material-icons-outlined">email</span> Partner With Us
        </a>
      </div>
    </div></section>
  `,
  styleUrl: './partnerships.component.css'
})
export class PartnershipsComponent implements OnInit {
  partners = PARTNERS;
  partnerTypes = [
    { key: 'school', label: 'Partner Schools', icon: 'school' },
    { key: 'college', label: 'Partner Colleges', icon: 'account_balance' },
    { key: 'organization', label: 'Organizations', icon: 'corporate_fare' },
    { key: 'collaborator', label: 'Technology Collaborators', icon: 'handshake' }
  ];

  constructor(private seoService: SeoService) {}
  ngOnInit(): void { this.seoService.setPageSeo('Partnerships', 'Explore Zy Innovators partner network of schools, colleges, and organizations.'); }

  getPartnersByType(type: string): Partner[] {
    return this.partners.filter(p => p.type === type);
  }
}
