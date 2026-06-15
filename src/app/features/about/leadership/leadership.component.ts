import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { SeoService } from '../../../core/services/seo.service';
import { LEADERS } from '../../../core/data/site.data';
import { Leader } from '../../../shared/models';

@Component({
  selector: 'zy-leadership',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css'
})
export class LeadershipComponent implements OnInit {
  leaders: Leader[] = LEADERS;
  constructor(private seoService: SeoService) {}
  ngOnInit(): void {
    this.seoService.setPageSeo('Leadership', 'Meet the leadership team driving Zy Innovators\' mission of educational innovation.');
  }
}
