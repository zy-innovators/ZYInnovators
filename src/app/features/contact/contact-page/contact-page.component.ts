import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'zy-contact-page',
  standalone: true,
  imports: [AnimateOnScrollDirective, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  name = signal('');
  email = signal('');
  institution = signal('');
  subject = signal('');
  message = signal('');

  constructor(private seoService: SeoService) {}
  ngOnInit(): void {
    this.seoService.setPageSeo('Contact', 'Get in touch with Zy Innovators. We\'d love to hear from you about programs, partnerships, or collaboration opportunities.');
  }

  getMailtoLink(): string {
    const sub = this.subject() || 'Website Inquiry';
    const body = `Name: ${this.name()}\nEmail: ${this.email()}\nInstitution: ${this.institution()}\n\n${this.message()}`;
    return `mailto:contact@zyinnovators.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
  }
}
