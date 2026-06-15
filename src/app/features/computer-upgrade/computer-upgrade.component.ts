import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { SeoService } from '../../core/services/seo.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'zy-computer-upgrade',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './computer-upgrade.component.html',
  styleUrl: './computer-upgrade.component.css'
})
export class ComputerUpgradeComponent implements OnInit {
  dataService = inject(DataService);
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.setPageSeo(
      'Computer Upgrade Program',
      'A progressive digital curriculum designed to transition students from basic visual logic to advanced AI-assisted productivity.'
    );
  }
}
