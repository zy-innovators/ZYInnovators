import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  updateTitle(title: string): void {
    this.titleService.setTitle(`${title} — Zy Innovators`);
  }

  updateMeta(description: string, keywords?: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    this.metaService.updateTag({ property: 'og:description', content: description });
  }

  setPageSeo(title: string, description: string, keywords?: string): void {
    this.updateTitle(title);
    this.updateMeta(description, keywords);
  }
}
